const numberButtons = document.querySelectorAll(".number-button");
let displayOutput = document.querySelector(".display-output");
const decimalButton = document.querySelector("#decimal");
const allClearButton = document.querySelector("#AC");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const evaluateButton = document.querySelector("#evaluate");
let enterPressed = null;

let currentOperand = null;
let newOperand = null;
let result = null;
let currentOperation = "";

const numberKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operatorKeys = {
  "+": subtractNumbers,
  "-": subtractNumbers,
  "*": multiplyNumbers,
  "/": divideNumbers,
  Enter: evaluate,
};

window.addEventListener("keydown", (key) => {
  const pressedKey = key.key;
  if (pressedKey in numberKeys) {
    if (newOperand === null) {
      displayOutput.textContent = "";
    }
    if (displayOutput.textContent.length < 16) {
      displayOutput.textContent += key.key;
      newOperand = parseFloat(displayOutput.textContent);
    }
  } else if (pressedKey in operatorKeys) {
    switch (pressedKey) {
      case "+":
        addNumbers();
        break;
      case "-":
        subtractNumbers();
        break;
      case "*":
        multiplyNumbers();
        break;
      case "/":
        divideNumbers();
        break;
      case "Enter":
        evaluate();
        break;
    }
  }
});

// Add numbers to the calculator display as you click the buttons

function appendNumberToDisplay() {
  if (newOperand === null) {
    displayOutput.textContent = "";
  }
  if (displayOutput.textContent.length < 16) {
    displayOutput.textContent += this.textContent;
    newOperand = parseFloat(displayOutput.textContent);
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", appendNumberToDisplay);
});

// Add decimal to the calculator display and prevent further decimals from being added.

function appendDecimal() {
  if (displayOutput.textContent.length < 16) {
    displayOutput.textContent += this.textContent;
    decimalButton.setAttribute("disabled", "");
  }
}

decimalButton.addEventListener("click", appendDecimal);

// Clear all contents

function clearAll() {
  currentOperand = null;
  newOperand = null;
  result = null;
  enterPressed = null;
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

function evaluate() {
  if (newOperand === null) {
    return;
  }
  enterPressed = true;
  if (enterPressed) {
    switch (currentOperation) {
      case "add":
        result = Math.round((currentOperand + newOperand) * 10000) / 10000;
        currentOperand = result;
        displayOutput.textContent = result;
        break;
      case "subtract":
        result = Math.round((currentOperand - newOperand) * 10000) / 10000;
        currentOperand = result;
        displayOutput.textContent = result;
        break;
      case "multiply":
        result = Math.round(currentOperand * newOperand * 10000) / 10000;
        currentOperand = result;
        displayOutput.textContent = result;
        break;
      case "divide":
        result = Math.round((currentOperand / newOperand) * 10000) / 10000;
        currentOperand = result;
        displayOutput.textContent = result;
        break;
    }
  } else {
    switch (currentOperation) {
      case "add":
        result = Math.round((currentOperand + newOperand) * 10000) / 10000;
        currentOperand = null;
        displayOutput.textContent = result;
        break;
      case "subtract":
        result = Math.round((currentOperand - newOperand) * 10000) / 10000;
        currentOperand = null;
        displayOutput.textContent = result;
        break;
      case "multiply":
        result = Math.round(currentOperand * newOperand * 10000) / 10000;
        currentOperand = null;
        displayOutput.textContent = result;
        break;
      case "divide":
        result = Math.round((currentOperand / newOperand) * 10000) / 10000;
        currentOperand = null;
        displayOutput.textContent = result;
        break;
    }
  }
}

evaluateButton.addEventListener("click", evaluate);

// Addition Operation

function addNumbers() {
  if (enterPressed) {
    newOperand = null;
    currentOperation = "add";
  } else {
    evalPreviousOperation();
    currentOperation = "add";
    clearDisplayForNextOperation();
  }
  enterPressed = false;
}

addButton.addEventListener("click", addNumbers);

// Subtraction Operation

function subtractNumbers() {
  if (enterPressed) {
    newOperand = null;
    currentOperation = "subtract";
  } else {
    evalPreviousOperation();
    currentOperation = "subtract";
    clearDisplayForNextOperation();
  }
  enterPressed = false;
}

subtractButton.addEventListener("click", subtractNumbers);

// Multiplication Operation

function multiplyNumbers() {
  if (enterPressed) {
    newOperand = null;
    currentOperation = "multiply";
  } else {
    evalPreviousOperation();
    currentOperation = "multiply";
    clearDisplayForNextOperation();
  }
  enterPressed = false;
}

multiplyButton.addEventListener("click", multiplyNumbers);

// Division Operation

function divideNumbers() {
  if (enterPressed) {
    newOperand = null;
    currentOperation = "divide";
  } else {
    evalPreviousOperation();
    currentOperation = "divide";
    clearDisplayForNextOperation();
  }
  enterPressed = false;
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
