const userNameInput = document.getElementById('name-input');
const userNameOutput = document.getElementById('name-output');

userNameInput.addEventListener('input', handleOutputuserName);

function handleOutputuserName(occurrence) {
  let userName = occurrence.currentTarget.value.trim();

  if (!userName) {
    userName = 'Anonymous';
  }
  userNameOutput.textContent = userName;
}
