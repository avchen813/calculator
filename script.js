const numberButtons = document.querySelectorAll('.number-button');
const displayOutput = document.querySelector('.display-output');
const decimalButton = document.querySelector('#decimal');


numberButtons.forEach(button => {
    button.addEventListener('click', appendNumberToDisplay);
})

function appendNumberToDisplay() {
    displayOutput.textContent += this.textContent;
}

//Add decimal to the calculator display and prevent further decimals from being added.

function appendDecimal() {
    displayOutput.textContent += this.textContent;
    decimalButton.setAttribute('disabled', '');
}

decimalButton.addEventListener('click', appendDecimal);