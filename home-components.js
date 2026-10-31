const portfolioComponentBase = new URL(".", document.currentScript.src);
const portfolioCvUrl = new URL(portfolioConfig.cvPath,portfolioComponentBase);
portfolioCvUrl.searchParams.set('v',portfolioConfig.cvVersion);
const paths = {
 home:'<path d="m3 10 9-7 9 7M5 9v12h5v-7h4v7h5V9"/>',
 user:'<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3Z"/>',
 skills:'<path d="M3 6h6m4 0h8M3 12h11m4 0h3M3 18h3m4 0h11"/><circle cx="11" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="8" cy="18" r="2"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 briefcase:'<rect x="3" y="7" width="18" height="14" rx="1"/><path d="M8 7V3h8v4M3 12h18m-11 0v3h4v-3"/>',
 badge:'<circle cx="12" cy="9" r="6"/><circle cx="12" cy="9" r="2"/><path d="m8 14-3 8 7-3 7 3-3-8"/>',
 mail:'<rect x="2" y="4" width="20" height="16" rx="1"/><path d="m2 5 10 8L22 5"/>',
 linkedin:'<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M7 10v7m4 0v-7m0 3c0-4 6-4 6 0v4"/><circle cx="7" cy="7" r=".65" fill="currentColor"/>',
 github:'<path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
 arrow:'<path d="M3 12h18m-7-7 7 7-7 7"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
class PortfolioHeader extends HTMLElement {
 connectedCallback(){this.innerHTML=`<header class="header"><a class="logo" href="#accueil" aria-label="Oumaima Baghadi"><span class="logo-short" aria-hidden="true">OB<span>.</span></span><span class="logo-full" aria-hidden="true">Oumaima <em>Baghadi</em></span></a><div class="header-links"><a href="https://github.com/ouma-bg" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${icon('github')}</a><a href="https://www.linkedin.com/in/oumaima-baghadi-874132300/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icon('linkedin')}</a><a href="mailto:oumaimabaghadi@gmail.com" aria-label="Envoyer un e-mail">${icon('mail')}</a><button class="theme-toggle" type="button" aria-label="Activer le mode sombre" aria-pressed="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path class="theme-moon" d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z"/><g class="theme-sun"><circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/></g></svg></button><div class="language-picker"><button class="language-toggle" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="language-menu" aria-label="Choisir la langue, Français"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg><span class="language-code">FR</span></button><div id="language-menu" class="language-menu" role="menu" aria-label="Language / Langue" hidden><button type="button" role="menuitemradio" data-language="fr" lang="fr" aria-checked="true">Français</button><button type="button" role="menuitemradio" data-language="en" lang="en" aria-checked="false">English</button></div></div><span class="separator" aria-hidden="true"></span><a class="cv" href="${portfolioCvUrl.href}" download="CV_Oumaima_Baghadi.pdf">Télécharger CV ${icon('download')}</a></div></header>`;const button=this.querySelector(".theme-toggle");const sync=()=>{const dark=document.documentElement.dataset.theme==="dark";button.setAttribute("aria-pressed",String(dark));button.setAttribute("aria-label",dark?"Activer le mode clair":"Activer le mode sombre");};button.addEventListener("click",()=>window.togglePortfolioTheme());document.addEventListener("portfolio-theme-change",sync);sync();
 const toggle=this.querySelector('.language-toggle'), menu=this.querySelector('.language-menu');
 const options=[...menu.querySelectorAll('button')];
 const close=()=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');};
 const open=()=>{menu.hidden=false;toggle.setAttribute('aria-expanded','true');options.find(b=>b.dataset.language===portfolioI18n.language).focus();};
 toggle.addEventListener('click',()=>menu.hidden?open():close());
 toggle.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();open();}});
 options.forEach(b=>b.addEventListener('click',()=>{portfolioI18n.setLanguage(b.dataset.language);close();toggle.focus();}));
 this.querySelector('.language-picker').addEventListener('keydown',e=>{if(e.key==='Escape'){close();toggle.focus();}else if(!menu.hidden&&['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();const i=options.indexOf(document.activeElement);options[e.key==='Home'?0:e.key==='End'?options.length-1:(i+(e.key==='ArrowDown'?1:-1)+options.length)%options.length].focus();}});
 document.addEventListener('click',e=>{if(!this.querySelector('.language-picker').contains(e.target))close();});
 this.querySelector('.language-picker').addEventListener('focusout',e=>{if(!this.querySelector('.language-picker').contains(e.relatedTarget))close();});
 }
}
class PortfolioNavigation extends HTMLElement {
 connectedCallback(){const items=[['accueil','Accueil','home'],['a-propos','À propos','user'],['competences','Compétences','skills'],['projets','Projets','grid'],['experiences','Expériences','briefcase'],['badges','Certifications','badge'],['contact','Contact','mail']];this.innerHTML=`<nav class="side-nav" aria-label="Navigation principale">${items.map(([id,label,glyph])=>`<a href="#${id}" aria-label="${label}" ${id==='accueil'?'aria-current="page"':''}>${icon(glyph)}<span class="nav-tooltip">${label}</span></a>`).join('')}</nav>`;}
}
customElements.define('portfolio-header',PortfolioHeader);
customElements.define('portfolio-navigation',PortfolioNavigation);
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));

// One-shot section entrances, with visible content as the no-JS/no-observer fallback.
const aboutSection = document.querySelector('#a-propos');
const aboutLeaves = document.querySelector('.about-leaves');
if (aboutLeaves) aboutLeaves.append(document.querySelector('.botanical').cloneNode(true));
if ('IntersectionObserver' in window) {
  const entranceObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-entered');
      entranceObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.about-reveal').forEach(el => entranceObserver.observe(el));

}


// Hash routes display one portfolio page; browser history remains native.
const portfolioPages=[...document.querySelectorAll('#accueil,#a-propos,#competences,#projets,#experiences,#badges,#contact')];
function showPortfolioPage(){let id=location.hash.slice(1)||'accueil';if(!location.hash)history.replaceState(null,'','#accueil');if(!portfolioPages.some(p=>p.id===id)){id='accueil';history.replaceState(null,'','#accueil');}portfolioPages.forEach(p=>{p.hidden=p.id!==id;p.classList.toggle('page-active',p.id===id);});document.querySelector('.contact-footer').hidden=id!=='contact';document.querySelectorAll('.side-nav a').forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});window.scrollTo({top:0,behavior:'instant'});document.querySelector('project-carousel')?.sync?.();}
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||!portfolioPages.some(p=>p.id===a.hash.slice(1)))return;e.preventDefault();if(location.hash!==a.hash)history.pushState(null,'',a.hash);showPortfolioPage();});window.addEventListener('load',showPortfolioPage,{once:true});window.addEventListener('hashchange',showPortfolioPage);window.addEventListener('popstate',showPortfolioPage);showPortfolioPage();
