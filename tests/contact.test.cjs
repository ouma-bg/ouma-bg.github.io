const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
function setup(fetch) {
 const fields=['name','email','subject','message'].map(name=>({
  id:'contact-'+name,name,type:name==='email'?'email':'text',value:name==='email'?'test@example.com':'Test',
  validity:{valid:true,tooLong:false},attributes:{},addEventListener(){},focus(){this.focused=true;},
  setAttribute(k,v){this.attributes[k]=v;},getAttribute(k){return this.attributes[k];},removeAttribute(k){delete this.attributes[k];}
 }));
 const status={textContent:'',dataset:{}};
 const button={disabled:false,innerHTML:'Envoyer le message',textContent:'Envoyer le message'};
 let submit;let resets=0;
 const form={attributes:{},querySelectorAll:()=>fields,querySelector:()=>button,
  addEventListener:(name,callback)=>{if(name==='submit')submit=callback;},
  setAttribute(k,v){this.attributes[k]=v;},removeAttribute(k){delete this.attributes[k];},
  reset(){resets++;fields.forEach(field=>field.value='');},honeypot:''};
 const errors={};fields.forEach(field=>errors['#'+field.id+'-error']={textContent:''});
 const document={querySelector(selector){return selector==='#contact-form'?form:selector==='#contact-status'?status:errors[selector]||{append(){},cloneNode(){return {};}};}};
 let sent;
 const context={document,window:{},portfolioConfig:{contactEndpoint:'https://formspree.io/f/meaalpza'},AbortController,setTimeout,clearTimeout,TypeError,
  FormData:class {constructor(){this.values=Object.fromEntries(fields.map(field=>[field.name,field.value]));this.values._gotcha=form.honeypot;}get(name){return this.values[name];}},
  fetch:async(url,options)=>{sent={url,options};return fetch(url,options);}};
 vm.runInNewContext(fs.readFileSync('contact.js','utf8'),context);
 return {fields,status,button,form,get sent(){return sent;},get resets(){return resets;},submit:()=>submit({preventDefault(){}})};
}
test('validation blocks empty fields and invalid email without submitting',async()=>{
 const ui=setup(()=>{throw Error('Unexpected request');});ui.fields[0].value=' ';ui.fields[1].validity.valid=false;
 await ui.submit();assert.equal(ui.sent,undefined);assert.equal(ui.fields[0].focused,true);assert.match(ui.status.textContent,/corriger/);
});
test('loading disables duplicate submissions; confirmed success alone resets fields',async()=>{
 let resolve;const ui=setup(()=>new Promise(done=>resolve=done));const request=ui.submit();
 assert.equal(ui.button.disabled,true);assert.equal(ui.button.textContent,'Envoi en cours…');assert.equal(ui.form.attributes['aria-busy'],'true');
 await ui.submit();assert.equal(ui.resets,0);resolve({ok:true,status:200,json:async()=>({ok:true})});await request;
 assert.equal(ui.resets,1);assert.equal(ui.status.dataset.state,'success');assert.equal(ui.button.disabled,false);
 assert.equal(ui.sent.options.method,'POST');assert.equal(ui.sent.options.headers.Accept,'application/json');
 assert.equal(ui.sent.options.body.get('email'),'test@example.com');
 for(const name of ['name','subject','message'])assert.equal(ui.sent.options.body.get(name),'Test');
});
test('HTTP failure and unconfirmed success preserve fields and show an error',async()=>{
 for(const response of [{ok:false,status:422,json:async()=>({errors:[{}]})},{ok:true,status:200,json:async()=>({})}]){
  const ui=setup(async()=>response);await ui.submit();assert.equal(ui.resets,0);assert.equal(ui.fields[0].value,'Test');
  assert.equal(ui.status.dataset.state,'error');assert.equal(ui.button.disabled,false);
 }
});
test('network failure preserves fields and restores submit button',async()=>{
 const ui=setup(async()=>{throw new TypeError('Offline');});await ui.submit();
 assert.equal(ui.resets,0);assert.equal(ui.status.dataset.state,'error');assert.match(ui.status.textContent,/connexion/);assert.equal(ui.button.disabled,false);
});
test('honeypot prevents sending without claiming success',async()=>{
 const ui=setup(()=>{throw Error('Unexpected request');});ui.form.honeypot='spam';await ui.submit();
 assert.equal(ui.sent,undefined);assert.equal(ui.resets,0);assert.equal(ui.status.dataset.state,'error');
});
