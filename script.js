const numberButtons = document.querySelectorAll(".number-button");
let displayOutput = document.querySelector(".display-output");
const decimalButton = document.querySelector("#decimal");
const allClearButton = document.querySelector("#AC");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const evaluateButton = document.querySelector("#evaluate");

let currentOperand = 0;
let newOperand = 0;
let result = null;

// Add numbers to the calculator display as you click the buttons

function appendNumberToDisplay() {
  if (displayOutput.textContent == result) {
    displayOutput.textContent = "";
  }
  displayOutput.textContent += this.textContent;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", appendNumberToDisplay);
});

// Add decimal to the calculator display and prevent further decimals from being added.

function appendDecimal() {
  displayOutput.textContent += this.textContent;
  decimalButton.setAttribute("disabled", "");
}

decimalButton.addEventListener("click", appendDecimal);

// Clear all contents

function clearAll() {
  currentOperand = 0;
  newOperand = 0;
  result = null;
  displayOutput.textContent = "";
}

allClearButton.addEventListener("click", clearAll);

// Addition Operation

function addNumbers() {
  newOperand = displayOutput.textContent;
  result = parseFloat(currentOperand) + parseFloat(newOperand);
  currentOperand += parseFloat(newOperand);
  displayOutput.textContent = result;
  decimalButton.removeAttribute("disabled");
}

addButton.addEventListener("click", addNumbers);

// Subtraction Operation

function subtractNumbers() {
  newOperand = displayOutput.textContent;
  result = parseFloat(currentOperand) - parseFloat(newOperand);
  currentOperand -= parseFloat(newOperand);
  displayOutput.textContent = result;
  decimalButton.removeAttribute("disabled");
}

subtractButton.addEventListener("click", subtractNumbers);

// Multiplication Operation

function multiplyNumbers() {
  newOperand = displayOutput.textContent;
  result = parseFloat(currentOperand) * parseFloat(newOperand);
  currentOperand *= parseFloat(newOperand);
  displayOutput.textContent = result;
  decimalButton.removeAttribute("disabled");
}

multiplyButton.addEventListener("click", multiplyNumbers);

// Division Operation

function divideNumbers() {
  newOperand = displayOutput.textContent;
  result = parseFloat(currentOperand) / parseFloat(newOperand);
  currentOperand /= parseFloat(newOperand);
  displayOutput.textContent = result;
  decimalButton.removeAttribute("disabled");
}

divideButton.addEventListener("click", divideNumbers);

// function setNumberAsOperand() {
//   return parseFloat(currentOperand) + parseFloat(newOperand);
// }
