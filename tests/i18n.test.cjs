const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
function setup(saved){
 const window={};const document={documentElement:{},addEventListener(){}};
 const context={window,document,localStorage:{getItem:()=>saved}};
 vm.createContext(context);
 for(const file of ['locales/fr.js','locales/en.js','i18n.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
 return {window,document,context};
}
test('French is default; only an explicit English choice changes document language',()=>{
 assert.equal(setup().document.documentElement.lang,'fr');
 assert.equal(setup('invalid').document.documentElement.lang,'fr');
 assert.equal(setup('en').document.documentElement.lang,'en');
});
test('both dictionaries cover all project, badge and experience descriptions',()=>{
 const {window,context}=setup();
 assert.deepEqual(Object.keys(window.portfolioLocales.fr),Object.keys(window.portfolioLocales.en));
 vm.runInContext(fs.readFileSync('projects-data.js','utf8')+';this.projects=portfolioProjects;',context);
 vm.runInContext(fs.readFileSync('certifications-data.js','utf8')+';this.badges=portfolioBadges;',context);
 vm.runInContext(fs.readFileSync('experiences-data.js','utf8')+';this.experiences=portfolioExperiences;',context);
 const descriptions=[...context.projects.map(p=>p.description),...context.badges.map(p=>p.description),...context.experiences.flatMap(e=>e.descriptions)];
 descriptions.forEach(text=>{assert.ok(window.portfolioLocales.en[text],text);assert.notEqual(window.portfolioLocales.en[text],text);});
 context.badges.forEach(b=>assert.equal(window.portfolioI18n.t(b.title,'en'),b.title));
});
test('dynamic counts, levels, dates and accessible project labels translate',()=>{
 const {window}=setup('en');const t=window.portfolioI18n.t;
 assert.equal(t('103 compétences'),'103 skills');
 assert.equal(t('orchestration agentique — Niveau : Avancé'),'Agentic orchestration — Level: Advanced');
 assert.equal(t('30 septembre 2026'),'September 30, 2026');
 assert.equal(t('Afficher Détection de pneumonie'),'Show Pneumonia detection');
 assert.equal(t('Télécharger CV'),'Download CV');
 assert.equal(t('Ce champ est requis.'),'This field is required.');
 assert.equal(t('Python'),'Python');
 assert.equal(t('Changer de langue','fr'),'Switch to English');
 assert.equal(t('Changer de langue','en'),'Passer en français');
});
