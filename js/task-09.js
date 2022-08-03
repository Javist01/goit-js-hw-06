function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

function changeColor() {

  const bodyRef = document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef;
  
}

buttonRef.addEventListener("click", changeColor); 