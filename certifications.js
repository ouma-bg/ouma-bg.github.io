class BadgeGallery extends HTMLElement {
 connectedCallback(){
 this.innerHTML='<div class="certifications-grid">'+portfolioBadges.map((badge,i)=>`<article class="certification-card" style="--badge-delay:${i%3*100}ms"><div class="certification-main"><img src="${badge.image}" alt="Badge officiel : ${escapeSkill(badge.title)}" width="160" height="160"><div class="certification-copy"><h3>${escapeSkill(badge.title)}</h3><p class="certification-organization">${badge.organization}</p><p>${badge.description}</p><time datetime="${badge.date}">${new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'long',year:'numeric'}).format(new Date(badge.date+'T12:00:00'))}</time></div></div><a href="${badge.link}" target="_blank" rel="noopener noreferrer" aria-label="Voir sur Credly : ${escapeSkill(badge.title)}">Voir sur Credly ${icon('arrow')}</a></article>`).join('')+'</div>';
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('badge-entered');observer.unobserve(entry.target)}}),{threshold:.1});this.querySelectorAll('article').forEach(card=>observer.observe(card));}
 }
}
customElements.define('badge-gallery',BadgeGallery);
const certificationsDecoration=document.querySelector('.certifications-decoration');if(certificationsDecoration)certificationsDecoration.append(document.querySelector('.botanical').cloneNode(true));
