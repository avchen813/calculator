const numberButtons = document.querySelectorAll(".number-button");
let displayOutput = document.querySelector(".display-output");
const decimalButton = document.querySelector("#decimal");
const allClearButton = document.querySelector("#AC");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const evaluateButton = document.querySelector("#evaluate");

let currentOperand = null;
let newOperand = null;
let result = null;
let currentOperation = "";

// Add numbers to the calculator display as you click the buttons

function appendNumberToDisplay() {
  if (newOperand === null) {
    displayOutput.textContent = "";
  }

  displayOutput.textContent += this.textContent;
  newOperand = parseFloat(displayOutput.textContent);
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
  currentOperand = null;
  newOperand = null;
  result = null;
  displayOutput.textContent = "";
}

allClearButton.addEventListener("click", clearAll);

// Prepare the display output by removing the result. Setting newOperand to null will allow appendNumberToDisplay to start with a blank output.

function clearDisplayForNextOperation() {
  if (currentOperand === null) {
    currentOperand = parseFloat(displayOutput.textContent);
    result = parseFloat(displayOutput.textContent);
    newOperand = null;
  } else {
    displayOutput.textContent = result;
    newOperand = null;
  }
  decimalButton.removeAttribute("disabled");
}

// Addition Operation

function addNumbers() {
  evalPreviousOperation();
  currentOperation = "add";
  clearDisplayForNextOperation();
}

addButton.addEventListener("click", addNumbers);

// Subtraction Operation

function subtractNumbers() {
  evalPreviousOperation();
  currentOperation = "subtract";
  clearDisplayForNextOperation();
}

subtractButton.addEventListener("click", subtractNumbers);

// Multiplication Operation

function multiplyNumbers() {
  evalPreviousOperation();
  currentOperation = "multiply";
  clearDisplayForNextOperation();
}

multiplyButton.addEventListener("click", multiplyNumbers);

// Division Operation

function divideNumbers() {
  evalPreviousOperation();
  currentOperation = "divide";
  clearDisplayForNextOperation();
}

divideButton.addEventListener("click", divideNumbers);

// Evaluate the previous operation

function evalPreviousOperation() {
  if (currentOperand === null) {
    return;
  }
  switch (currentOperation) {
    case "add":
      result = Math.round((currentOperand + newOperand) * 10000) / 10000;
      currentOperand = result;
      break;
    case "subtract":
      result = Math.round((currentOperand - newOperand) * 10000) / 10000;
      currentOperand = result;
      break;
    case "multiply":
      result = Math.round(currentOperand * newOperand * 10000) / 10000;
      currentOperand = result;
      break;
    case "divide":
      result = Math.round((currentOperand / newOperand) * 10000) / 10000;
      currentOperand = result;
      break;
  }
}

// console.log(`currentOperand is ${currentOperand}`);
// console.log(`newOperand is ${newOperand}`);
// console.log(`result is ${result}`);
