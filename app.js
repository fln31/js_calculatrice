const buttons = document.querySelectorAll(".grid button");
const calcInput = document.querySelector(".calculation");
const result = document.querySelector(".result");

const handleClick = (e) => {
  e.preventDefault;
  const el = e.target.dataset.action;

  if (el === "=") {
    if (isNaN(calcInput.textContent.slice(-1))) {
      return;
    }
    result.textContent = calc(calcInput.textContent).toFixed(3);
  } else if (el === "c") {
    calcInput.textContent = calcInput.textContent.slice(0, -1);
  } else if (el === "ce") {
    calcInput.textContent = "";
    result.textContent = "";
  } else {
    calcInput.textContent += el;
  }
};

const calc = (stringToCalc ) => {
  return new Function("return " + stringToCalc)();
};

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});