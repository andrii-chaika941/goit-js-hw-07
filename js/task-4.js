const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmitLoginForm);

function onSubmitLoginForm(occurrence) {
  occurrence.preventDefault();

  const email = occurrence.target.elements.email.value.trim();
  const password = occurrence.target.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const userData = {
    email,
    password,
  };

  console.log(`userData`, userData);

  occurrence.target.reset();
}
