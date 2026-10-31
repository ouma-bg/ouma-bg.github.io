const skillGroups = [
 {title:'Langages & développement web',glyph:'code',items:'Python|Java|C|C++|C#|JavaScript|TypeScript|PHP|Dart|React|Next.js|HTML5|CSS3|Bootstrap|Tailwind CSS|Framer Motion'},
 {title:'Back-end & données',glyph:'database',items:'Spring Boot|FastAPI|Flask|Laravel|Jakarta EE|API REST|Swagger/OpenAPI|JDBC/JPA|Pydantic|Oracle|MySQL|PostgreSQL|SQL Server|SQL/PLSQL|optimisation SQL|import CSV|dédoublonnage'},
 {title:'IA, Data & Computer Vision',glyph:'brain',items:'TensorFlow|Keras|PyTorch|XGBoost|Scikit-learn|Pandas|CNN|RNN|Transfer Learning|SMOTE|augmentation de données|FaceNet|détection d’objets|classification médicale|ELA|EasyOCR|TensorFlow Lite|Jupyter|Google Colab|LLM|RAG|fine-tuning LLM|Prompt Engineering|chatbots|extraction d’information|matching sémantique|orchestration agentique'},
 {title:'DevOps, cloud & automatisation',glyph:'gear',items:'Docker|Jenkins|GitHub Actions|CI/CD|Bitbucket|Git|GitHub|pytest|tests unitaires et fonctionnels|Prometheus|Grafana|Streamlit|n8n|variables d’environnement',training:'AWS Academy|cloud computing|administration et sécurité des systèmes|sécurité des réseaux et des données'},
 {title:'Développement mobile',glyph:'phone',items:'Flutter|Dart|React Native|Expo|Android|Java|Firebase|géolocalisation|TensorFlow Lite'},
 {title:'Sécurité, réseaux & méthodes',glyph:'shield',items:'JWT|hachage|contrôle des accès|validation des données|séparation lecture/écriture|journal d’audit|POO|architecture microservices|revues de code|Agile/Scrum|Jira|Confluence|documentation technique',training:'réseaux informatiques et d’opérateurs|routage|transmission numérique|modulation|communications sans fil|systèmes mobiles'}
].map(group=>({...group,items:group.items.split('|'),training:group.training?.split('|')||[]}));
const skillLogos = {
 'Python':'python','Java':'java','C':'c','C++':'cplusplus','C#':'csharp','JavaScript':'javascript','TypeScript':'typescript','PHP':'php','Dart':'dart','React':'react','Next.js':'nextjs','HTML5':'html5','CSS3':'css3','Bootstrap':'bootstrap','Tailwind CSS':'tailwindcss','Framer Motion':'framermotion','Spring Boot':'spring','FastAPI':'fastapi','Flask':'flask','Laravel':'laravel','Swagger/OpenAPI':'swagger','Oracle':'oracle','MySQL':'mysql','PostgreSQL':'postgresql','SQL Server':'microsoftsqlserver','TensorFlow':'tensorflow','Keras':'keras','PyTorch':'pytorch','Scikit-learn':'scikitlearn','TensorFlow Lite':'tensorflow','Jupyter':'jupyter','Docker':'docker','Jenkins':'jenkins','GitHub Actions':'githubactions','Bitbucket':'bitbucket','Git':'git','GitHub':'github','pytest':'pytest','Prometheus':'prometheus','Grafana':'grafana','Streamlit':'streamlit','AWS Academy':'amazonwebservices','Flutter':'flutter','React Native':'react','Expo':'expo','Android':'android','Jira':'jira','Confluence':'confluence','n8n':'n8n','Google Colab':'googlecolab','Pandas':'pandas','Pydantic':'pydantic','Firebase':'firebase'
};
const skillGlyphs = {
 code:'<path d="m8 5-6 7 6 7m8-14 6 7-6 7m-3-17-2 20"/>',
 database:'<ellipse cx="12" cy="4" rx="8" ry="3"/><path d="M4 4v16c0 4 16 4 16 0V4M4 12c0 4 16 4 16 0"/>',
 brain:'<path d="M12 4c-4-5-9 1-7 5-5 3-2 9 1 9 0 5 6 5 6 1V4Zm0 0c4-5 9 1 7 5 5 3 2 9-1 9 0 5-6 5-6 1M7 8l2 2m-3 5 3-1m8-6-2 2m3 5-3-1"/>',
 gear:'<path d="m9 2-1 4-4 1-2 3 3 3-1 4 3 3 4-1 3 3 3-2 1-4 4-1-1-4-3-2V5l-4-1Z"/><circle cx="12" cy="12" r="4"/>',
 phone:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 5h4m-3 14h2"/>',
 shield:'<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6Z"/><path d="m8 12 3 3 5-6"/>',
 cloud:'<path d="M5 19a5 5 0 0 1-1-10 8 8 0 0 1 15 0 5 5 0 0 1 0 10Z"/>',
 network:'<circle cx="12" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/><path d="M12 6v6M4 18v-6h16v6"/>',
 key:'<circle cx="8" cy="8" r="5"/><path d="m12 12 9 9m-3-3 3-3m-6 0 3-3"/>',
 data:'<path d="M5 2h10l4 4v16H5ZM14 2v5h5M8 11h8m-8 4h8m-8 4h5"/>',
 vision:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'
};
const skillIcon = glyph => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${skillGlyphs[glyph]}</svg>`;
const escapeSkill = text => text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const skillAssetBase=new URL(".",document.currentScript.src);
function skillVisual(name,group){
 if(name==='AndroidX RecyclerView')return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="4" y="3" width="16" height="5" rx="1"/><rect x="4" y="10" width="16" height="5" rx="1"/><path d="M4 18h16M4 21h16"/></svg>';
 if(name==='Material Components')return "<svg fill=\"#757575\" aria-hidden=\"true\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Material Design</title><path d=\"M11.9998 23.9997c-1.6545 0-3.218-.309-4.691-.927-1.4544-.6364-2.7269-1.4909-3.8179-2.5639-1.073-1.0905-1.9274-2.3634-2.5634-3.8179C.3085 15.2179 0 13.6545 0 12c0-1.6725.309-3.2364.927-4.6909.6365-1.4545 1.491-2.718 2.564-3.791C4.5818 2.4278 5.8543 1.5733 7.3087.9548c1.473-.6365 3.0365-.9545 4.691-.9545 1.673 0 3.2364.318 4.6909.955 1.4544.618 2.7179 1.4725 3.7909 2.563 1.091 1.073 1.945 2.3364 2.5634 3.7909C23.6815 8.7641 24 10.3275 24 12c0 1.655-.3185 3.218-.955 4.6909-.618 1.4545-1.4724 2.7274-2.5634 3.818-1.073 1.0729-2.3365 1.9274-3.791 2.5639-1.455.618-3.0179.927-4.6909.927zm-7.6364-5.8633V5.8636A9.4843 9.4843 0 0 0 2.755 8.7001C2.373 9.7365 2.1825 10.8365 2.1825 12s.1905 2.2725.5724 3.3274a9.5713 9.5713 0 0 0 1.609 2.809zm1.5-13.7727H18.163a9.4848 9.4848 0 0 0-2.836-1.609c-1.0549-.382-2.1639-.5725-3.3273-.5725-1.1635 0-2.2725.1905-3.327.5725a9.5713 9.5713 0 0 0-2.8094 1.609Zm6.1364 10.3637 4.1179-8.1818H7.9088Zm1.091 2.727h4.3633V8.7276Zm-6.5454 0h4.3634L6.5454 8.7276Zm8.7813 3.791c1.0545-.382 2-.918 2.836-1.609H5.8628a9.5713 9.5713 0 0 0 2.8094 1.609c1.0545.3819 2.1635.5724 3.327.5724 1.0543 0 2.1823-.1579 3.3274-.5725zm4.3089-3.109a9.5713 9.5713 0 0 0 1.609-2.809c.382-1.055.5724-2.164.5724-3.3274 0-1.1635-.1905-2.2635-.5724-3.3-.382-1.055-.918-1.9999-1.609-2.8364Z\"/></svg>";
 const logo=skillLogos[name];
 if(logo){const variant=logo==='amazonwebservices'?'original-wordmark':'original';return `<img src="${new URL(`assets/skill-logos/${logo}-${logo}-${variant}.svg`,skillAssetBase).href}" alt="" width="36" height="36" loading="lazy">`;}
 const glyph=/sécurité|JWT|hachage|accès/.test(name)?'key':/réseaux|routage|microservices|orchestration/.test(name)?'network':/données|CSV|SQL|information|audit/.test(name)?'data':/détection|FaceNet|ELA|médicale|OCR/.test(name)?'vision':/cloud|systèmes/.test(name)?'cloud':group;
 return skillIcon(glyph);
}

const cloudHighlights=new Set(['AWS Academy','cloud computing','administration et sécurité des systèmes','sécurité des réseaux et des données']);
const levelWidths={'Notions':30,'Intermédiaire':60,'Avancé':90};
class SkillsExplorer extends HTMLElement {
 connectedCallback(){this.filter='Toutes';this.render();}
 render(){
 const items=portfolioSkills.filter(s=>this.filter==='Toutes'||s.filters.includes(this.filter));
 this.innerHTML='<div class="skills-filters" role="group" aria-label="Filtrer les compétences">'+skillFilters.map(f=>'<button type="button" aria-pressed="'+(f===this.filter)+'" data-skill-filter="'+escapeSkill(f)+'">'+escapeSkill(f)+'</button>').join('')+'</div><p class="skills-count" aria-live="polite">'+items.length+' compétences</p><div class="skills-grid">'+items.map((s,i)=>'<article class="skill-tile'+(cloudHighlights.has(s.name)?' skill-cloud-highlight':'')+'" tabindex="0" style="--tile-delay:'+Math.min(i%12*25,275)+'ms" aria-label="'+escapeSkill(s.name)+(s.level?' — Niveau : '+s.level:'')+'"><span class="skill-visual">'+skillVisual(s.name,s.glyph)+'</span><div class="skill-label"><span>'+escapeSkill(s.name)+'</span>'+(levelWidths[s.level]?'<span class="skill-level" aria-hidden="true"><span style="--level-width:'+levelWidths[s.level]+'%"></span></span><span class="skill-tooltip">'+s.level+'</span>':'')+'</div></article>').join('')+'</div>';
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('tile-entered');observer.unobserve(entry.target);}}),{threshold:.1});this.querySelectorAll('.skill-tile').forEach(tile=>observer.observe(tile));}else{this.querySelectorAll('.skill-tile').forEach(tile=>tile.classList.add('tile-entered'));}
 this.querySelectorAll('[data-skill-filter]').forEach(b=>b.addEventListener('click',()=>{this.filter=b.dataset.skillFilter;this.render();this.querySelector('[aria-pressed="true"]').focus({preventScroll:true});}));
 }
}
customElements.define('skills-explorer',SkillsExplorer);
const skillsDecoration=document.createElement('div');skillsDecoration.className='skills-decoration';skillsDecoration.setAttribute('aria-hidden','true');skillsDecoration.append(document.querySelector('.botanical').cloneNode(true));document.querySelector('#competences').prepend(skillsDecoration);

