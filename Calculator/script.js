const operation = document.getElementsByClassName('keyOperator'); //it's an array [+,-,/,*]
let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

const calculate = document.querySelector('.key-equal');
const display = document.querySelector('.display');

calculate.addEventListener('click', resultNumber);

for (let i = 0; i < operation.length; i++) {
  const operationButton = operation[i];
  operationButton.addEventListener('click', onOperationButtonClick);
}


function onOperationButtonClick(event) {
  const clickedElement = event.currentTarget;
  const operationSign = clickedElement.innerHTML;
  makeOperation(operationSign);
}
function makeOperation(operationCode) {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value);
  let result = 0;
  if (operationCode === '+') {
    result = number1 + number2;
  } else if (operationCode === '-') {
    result = number1 - number2;
  } else if (operationCode === '*') {
    result = number1 * number2;
  } else if (operationCode === '/') {
    result = number1 / number2;
  }
  return result;
}
//Get result after press equal sign:

function resultNumber() {
  let z = makeOperation();
  console.log(z);

}
// show the result on the display:

//resultNumber(result);
