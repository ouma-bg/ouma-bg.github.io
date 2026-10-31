const contactForm = document.querySelector('#contact-form');
const contactFields = [...contactForm.querySelectorAll('[required]')];
const contactStatus = document.querySelector('#contact-status');
const contactSubmit = contactForm.querySelector('button[type="submit"]');
contactForm.action = portfolioConfig.contactEndpoint;
function validateContactField(field) {
  const error = !field.value.trim() ? 'Ce champ est requis.'
    : field.type === 'email' && !field.validity.valid ? 'Saisissez une adresse e-mail valide.'
    : field.validity.tooLong ? 'Ce texte est trop long.' : '';
  field.setAttribute('aria-invalid', String(Boolean(error)));
  document.querySelector('#' + field.id + '-error').textContent = error;
  return !error;
}
contactFields.forEach(field => {
  field.addEventListener('blur', () => validateContactField(field));
  field.addEventListener('input', () => { if (field.getAttribute('aria-invalid') === 'true') validateContactField(field); });
});
contactForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (contactSubmit.disabled) return;
  contactStatus.textContent = '';
  contactStatus.dataset.state = '';
  if (!contactFields.map(validateContactField).every(Boolean)) {
    contactStatus.textContent = 'Veuillez corriger les champs indiqués.';
    contactFields.find(field => field.getAttribute('aria-invalid') === 'true').focus();
    return;
  }
  const data = new FormData(contactForm);
  if (String(data.get('_gotcha') || '').trim()) {
    contactStatus.textContent = 'L’envoi a été bloqué par la protection antispam. Rechargez la page puis réessayez.';
    contactStatus.dataset.state = 'error';
    return;
  }
  // Keep a French source label: the translation layer applies the current language,
  // including when it changes while a request is still in flight.
  const initialLabel = 'Envoyer le message ' + (contactSubmit.querySelector?.('svg')?.outerHTML || '');
  contactSubmit.disabled = true;
  contactSubmit.textContent = 'Envoi en cours…';
  contactForm.setAttribute('aria-busy', 'true');
  contactStatus.textContent = 'Envoi en cours…';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    // Formspree uses the field named email as the sender's Reply-To address.
    const response = await fetch(portfolioConfig.contactEndpoint, {
      method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: controller.signal
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.ok !== true) {
      const explanation = response.status === 429 ? 'Trop de tentatives. Veuillez patienter avant de réessayer.'
        : response.status === 422 ? 'Le service a refusé le message. Vérifiez votre adresse e-mail et les champs renseignés.'
        : 'Le service d’envoi est indisponible ou a refusé le message. Réessayez plus tard ou écrivez à oumaimabaghadi@gmail.com.';
      throw new Error(explanation);
    }
    contactForm.reset();
    contactFields.forEach(field => field.removeAttribute('aria-invalid'));
    contactStatus.dataset.state = 'success';
    contactStatus.textContent = 'Votre message a été accepté par le service d’envoi. Merci pour votre prise de contact !';
  } catch (error) {
    contactStatus.dataset.state = 'error';
    contactStatus.textContent = error.name === 'AbortError'
      ? 'Le service met trop de temps à répondre. Vos champs sont conservés ; réessayez dans un instant.'
      : error instanceof TypeError ? 'Impossible de joindre le service. Vérifiez votre connexion puis réessayez ; vos champs sont conservés.' : error.message;
  } finally {
    clearTimeout(timeout);
    contactSubmit.disabled = false;
    contactSubmit.innerHTML = initialLabel;
    contactForm.removeAttribute('aria-busy');
  }
});
document.querySelector('.contact-decoration').append(document.querySelector('.botanical').cloneNode(true));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('contact-entered'); observer.unobserve(entry.target); }
  }), { threshold: .1 });
  document.querySelectorAll('.contact-reveal').forEach(element => observer.observe(element));
}
