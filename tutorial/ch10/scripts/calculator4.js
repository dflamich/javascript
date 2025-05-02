
let calculation = localStorage.getItem('currentCalculation') || '';

changeClearButton();

if (calculation) {
  displayCalculation(`Previous calculation: ${calculation}. Press C to clear`)
} else {
  displayCalculation('No previous calculations. Press a number to calculate!')
}


function updateCalculation(numOrOp = '') {
  if (!isNaN(numOrOp)) {
    calculation += numOrOp;
    displayCalculation(calculation);
  }  
  else if (numOrOp === '=') {
    calculation = eval(calculation);
    displayCalculation(calculation);
  }  
  else {
      if (calculation !== '') {
        calculation += numOrOp;
        displayCalculation  (calculation);
      } else {
        displayCalculation('Please add a number first!')
      }
  }

  changeClearButton();

  localStorage.setItem('currentCalculation', `${calculation}`);
}


function displayCalculation(calculation) {
  let calculationElement = document
        .querySelector
          ('.js-calculation')
  calculationElement
    .innerHTML = calculation;
}

function changeClearButton() {
  const clearButtonClass = document
    .querySelector('.js-clear-button')
      .classList
  
  if (calculation !== '') {
    clearButtonClass
      .add('operation-button')
  } else if (clearButtonClass
      .contains('operation-button')) {
    clearButtonClass
      .remove('operation-button')
  }
}