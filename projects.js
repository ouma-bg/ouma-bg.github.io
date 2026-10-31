const projectAssetBase = new URL('.',document.currentScript.src);
class ProjectCarousel extends HTMLElement{
 connectedCallback(){this.filtered=portfolioProjects;this.index=0;this.innerHTML='<div class="project-track" role="region" aria-roledescription="carrousel" aria-label="Projets — utilisez les flèches du clavier pour parcourir" tabindex="0"></div><div class="project-controls"><span class="project-counter" aria-live="polite"></span><div class="project-dots" aria-label="Choisir un projet"></div></div>';this.track=this.querySelector('.project-track');this.dots=this.querySelector('.project-dots');this.dots.addEventListener('click',e=>{const b=e.target.closest('button');if(b){this.manualActivity();this.select(+b.dataset.index);}});this.track.addEventListener('keydown',e=>{if(e.target!==this.track)return;if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();this.manualActivity();this.select(e.key==='Home'?0:e.key==='End'?this.filtered.length-1:this.index+(e.key==='ArrowRight'?1:-1));}});this.track.addEventListener('scroll',()=>this.sync(),{passive:true});this.track.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0)return;this.drag={x:e.clientX,left:this.track.scrollLeft,id:e.pointerId,moved:false};});this.track.addEventListener('pointermove',e=>{const d=this.drag;if(!d)return;if(Math.abs(e.clientX-d.x)>6&&!d.moved){d.moved=true;this.track.setPointerCapture(d.id);this.track.classList.add('dragging');}if(d.moved){e.preventDefault();this.track.scrollLeft=d.left+d.x-e.clientX;}});const release=()=>{if(!this.drag)return;this.suppressClick=this.drag.moved;const d=this.drag;this.drag=null;setTimeout(()=>this.suppressClick=false,0);const step=this.cardStep();this.track.classList.remove('dragging');this.select(Math.round(this.track.scrollLeft/step));};this.track.addEventListener('pointerup',release);this.track.addEventListener('pointercancel',release);this.track.addEventListener('click',e=>{if(this.suppressClick){e.preventDefault();e.stopPropagation();this.suppressClick=false;}},true);document.querySelectorAll('.project-filters button').forEach(b=>b.addEventListener('click',()=>{this.filtered=portfolioProjects.filter(p=>b.dataset.filter==='Tous'||(p.categories||[p.category]).includes(b.dataset.filter));document.querySelectorAll('.project-filters button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));this.render();}));this.render();this.setupAutoplay();}
 render(){this.track.innerHTML=this.filtered.map((project,projectIndex)=>`<article class="project-feature" aria-label="${escapeSkill(project.name)}"><div class="project-capture">${project.image?`<img src="${new URL(project.image,projectAssetBase).href}" alt="Couverture du projet ${escapeSkill(project.name)}" width="1672" height="941" loading="${projectIndex<2?'eager':'lazy'}" decoding="async">`:`<div class="project-placeholder"><strong>${escapeSkill(project.name)}</strong><span>Capture à fournir</span></div>`}</div><div class="project-details"><div class="project-name"><h3>${escapeSkill(project.name)}</h3><span>${(project.categories||[project.category]).join(' · ')}</span></div><p>${escapeSkill(project.description)}</p><ul class="project-technologies">${project.technologies.map(name=>`<li><span>${skillVisual(name==='Next.js 14'?'Next.js':name,'code')}</span>${escapeSkill(name)}</li>`).join('')}</ul><div class="project-actions"><a class="project-github" href="${project.github}" target="_blank" rel="noopener noreferrer">${icon('github')} GitHub</a>${project.linkedinPostUrl?`<a href="${escapeSkill(project.linkedinPostUrl)}" target="_blank" rel="noopener noreferrer">Voir la démo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg></a>`:`<span class="project-demo-pending">Démo bientôt disponible</span>`}</div></div></article>`).join('');this.index=0;this.track.scrollLeft=0;this.dots.innerHTML=this.filtered.map((p,i)=>'<button type="button" data-index="'+i+'" aria-label="Afficher '+escapeSkill(p.name)+'"></button>').join('');this.sync();if(this.autoplayReady){this.scheduleAutoplay();}}
 cardStep(){return (this.track?.firstElementChild?.getBoundingClientRect().width||0)+(parseFloat(getComputedStyle(this.track).columnGap)||0);}
 sync(){const step=this.cardStep();if(!step||this.closest('#projets').hidden)return;this.index=Math.min(this.filtered.length-1,Math.round(this.track.scrollLeft/step));this.dots.querySelectorAll('button').forEach((b,i)=>{if(i===this.index)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current');});this.querySelector('.project-counter').textContent=(this.index+1)+' / '+this.filtered.length;}
 select(i){const step=this.cardStep();if(!step)return;this.track.scrollTo({left:Math.max(0,Math.min(i,this.filtered.length-1))*step,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
 setupAutoplay(){
  this.autoplayReady=true;this.reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');this.pointerActive=false;
  this.track.addEventListener('pointerdown',()=>{this.pointerActive=true;this.manualActivity();});
  this.endPointer=()=>{if(this.pointerActive){this.pointerActive=false;this.manualActivity();}};window.addEventListener('pointerup',this.endPointer);window.addEventListener('pointercancel',this.endPointer);
  // Scroll events also come from scrollTo and snapping: only input extends the manual delay.
  this.track.addEventListener('wheel',()=>this.manualActivity(),{passive:true});
  this.visibilityHandler=()=>{this.pointerActive=false;this.drag=null;this.track.classList.remove('dragging');this.sync();this.scheduleAutoplay();};document.addEventListener('visibilitychange',this.visibilityHandler);
  this.routeObserver=new MutationObserver(this.visibilityHandler);this.routeObserver.observe(this.closest('#projets'),{attributes:true,attributeFilter:['hidden']});
  this.motionHandler=()=>this.scheduleAutoplay();this.reducedMotion.addEventListener('change',this.motionHandler);
  this.resizeObserver=new ResizeObserver(()=>this.sync());this.resizeObserver.observe(this.track);this.scheduleAutoplay();
 }
 manualActivity(){this.scheduleAutoplay();}
 scheduleAutoplay(){
  clearTimeout(this.autoplayTimer);if(!this.autoplayReady)return;
  // Hover and focus do not pause playback; gestures and invisible pages do.
  const blocked=this.reducedMotion.matches||this.pointerActive||document.hidden||this.closest('#projets').hidden||this.filtered.length<2;
  this.dataset.autoplayState=blocked?'paused':'playing';
  this.querySelector('.project-counter').setAttribute('aria-live',blocked?'polite':'off');if(blocked)return;
  this.autoplayTimer=setTimeout(()=>{this.sync();this.select(this.track.scrollLeft>=this.track.scrollWidth-this.track.clientWidth-2?0:this.index+1);this.scheduleAutoplay();},3000);
 }
 disconnectedCallback(){clearTimeout(this.autoplayTimer);this.routeObserver?.disconnect();this.resizeObserver?.disconnect();document.removeEventListener('visibilitychange',this.visibilityHandler);window.removeEventListener('pointerup',this.endPointer);window.removeEventListener('pointercancel',this.endPointer);this.reducedMotion?.removeEventListener('change',this.motionHandler);}

}
customElements.define('project-carousel',ProjectCarousel);
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-entered');observer.unobserve(entry.target);}}),{threshold:.1});observer.observe(document.querySelector('#projets'));}
const projectLeaves=document.createElement('div');projectLeaves.className='projects-decoration';projectLeaves.setAttribute('aria-hidden','true');projectLeaves.append(document.querySelector('.botanical').cloneNode(true));document.querySelector('#projets').prepend(projectLeaves);








