/* Translate text in place: route, form values, filters, scroll positions and timers remain intact. */
(() => {
 const dictionaries=window.portfolioLocales;
 let language='fr';
 try { if(localStorage.getItem('portfolio-language')==='en')language='en'; } catch {}
 const bindings=new WeakMap();
 const months={'janvier':'January','février':'February','mars':'March','avril':'April','mai':'May','juin':'June','juillet':'July','août':'August','septembre':'September','octobre':'October','novembre':'November','décembre':'December'};
 function translate(source,lang=language){
  if(lang==='fr')return dictionaries.fr[source] ?? source;
  if(Object.hasOwn(dictionaries.en,source))return dictionaries.en[source];
  let match;
  if((match=source.match(/^(\d+) compétences$/)))return `${match[1]} skills`;
  if((match=source.match(/^(.*?) — Niveau : (.*)$/)))return `${translate(match[1],lang)} — Level: ${translate(match[2],lang)}`;
  for(const [prefix,en] of [['Couverture du projet ','Project cover: '],['Afficher ','Show '],['Badge officiel : ','Official badge: '],['Voir sur Credly : ','View on Credly: ']])if(source.startsWith(prefix))return en+translate(source.slice(prefix.length),lang);
  if((match=source.match(/^(\d{1,2}) ([a-zéû]+) (\d{4})$/))&&months[match[2]])return `${months[match[2]]} ${match[1]}, ${match[3]}`;
  if(source.includes(' · '))return source.split(' · ').map(part=>translate(part,lang)).join(' · ');
  return source;
 }
 function bind(target,key,current,write){
  let records=bindings.get(target);if(!records){records={};bindings.set(target,records);}
  let record=records[key];if(!record||current!==record.last)record=records[key]={source:current,last:current};
  const leading=record.source.match(/^\s*/)[0],trailing=record.source.match(/\s*$/)[0];
  const result=leading+translate(record.source.trim())+trailing;
  if(result!==current)write(result);record.last=result;
 }
 function apply(root=document.body){
  if(!root)return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement?.closest('script,style,noscript,[data-no-translate]')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{if(node.nodeValue.trim())bind(node,'text',node.nodeValue,value=>node.nodeValue=value);});
  const elements=[...(root.nodeType===1?[root]:[]),...root.querySelectorAll('[aria-label],[aria-roledescription],[placeholder],[alt],[title],meta[name="description"]')];
  for(const el of elements)for(const attr of ['aria-label','aria-roledescription','placeholder','alt','title',...(el.matches('meta[name="description"]')?['content']:[])])if(el.hasAttribute(attr))bind(el,attr,el.getAttribute(attr),value=>el.setAttribute(attr,value));
  document.documentElement.lang=language;
  document.querySelectorAll('.language-code').forEach(el=>{if(el.textContent!==language.toUpperCase())el.textContent=language.toUpperCase();});
  document.querySelectorAll('.language-toggle').forEach(el=>{const label=translate('Changer de langue');if(el.getAttribute('aria-label')!==label)el.setAttribute('aria-label',label);});
 }
 function setLanguage(value){
  if(!['fr','en'].includes(value))return;
  language=value;try{localStorage.setItem('portfolio-language',value);}catch{}
  apply();apply(document.head);
  document.dispatchEvent(new CustomEvent('portfolio-language-change',{detail:{language}}));
 }
 window.portfolioI18n={get language(){return language;},t:translate,setLanguage,apply};
 document.documentElement.lang=language;
 document.addEventListener('DOMContentLoaded',()=>{
  apply();apply(document.head);
  const observer=new MutationObserver(records=>{
   const roots=new Set();for(const record of records){const node=record.target.nodeType===3?record.target.parentElement:record.target;if(node&&!node.closest('script,style,[data-no-translate]'))roots.add(node);}
   roots.forEach(root=>apply(root));
  });
  observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','aria-roledescription','placeholder','alt','title']});
 },{once:true});
})();
