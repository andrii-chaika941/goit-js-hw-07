function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtnColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

changeBtnColor.addEventListener('click', changeBodyColor);

function changeBodyColor(occurrence) {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;

  colorName.textContent = newColor;
}
