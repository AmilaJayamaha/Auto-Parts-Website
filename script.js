const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;

  if (isValidEmail(email)) {
    subscribeToNewsletter(email);
    emailInput.value = '';
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function subscribeToNewsletter(email) {
  console.log(`Subscribed email: ${email}`);
}
