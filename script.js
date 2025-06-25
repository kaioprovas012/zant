const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Muda a posição do botão "Não" ao passar o mouse
noBtn.addEventListener("mouseover", () => {
  const novaPosX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const novaPosY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${novaPosX}px`;
  noBtn.style.top = `${novaPosY}px`;
});

// Ação ao clicar no botão "Sim"
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});