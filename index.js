const optionsMaxLength = 300;

const ARRAY_NUMBERS = Array.from({ length: optionsMaxLength }, (_, index) => {
  return index + 1;
});

let randomSelected = 0;

const numbersBox = document.getElementById("numbers");
const messageBox = document.getElementById("message");

const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const selectNumber = (selected) => {
  if (selected === randomSelected) {
    document.getElementById(`button-${selected}`).classList.add("selected");

    messageBox.innerHTML = "Sí, ese es mi número!";
  } else if (selected < randomSelected) {
    messageBox.innerHTML = `Mí numero es mayor que ${selected}`;

    disableButtons(1, selected);
  } else if (selected > randomSelected) {
    messageBox.innerHTML = `Mí numero es menor que ${selected}`;

    disableButtons(selected, ARRAY_NUMBERS.length);
  }
};

const disableButtons = (start, end) => {
  for (let index = start; index <= end; index++) {
    document.getElementById(`button-${index}`).setAttribute("disabled", true);
  }
};

const drawButtons = () => {
  let numberButtons = "";

  for (const num of ARRAY_NUMBERS) {
    numberButtons += `<button type="button" id="button-${num}" onclick="selectNumber(${num})">${num}</button>`;
  }

  numbersBox.innerHTML = numberButtons;
};

const restart = () => {
  initGame();

  messageBox.innerHTML = "";
};

const initGame = () => {
  drawButtons();

  randomSelected = getRandom(1, ARRAY_NUMBERS.length);
};

window.onload = () => {
  initGame();
};
