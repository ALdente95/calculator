const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const allClearButton = document.querySelector('.clear');
const previousDisplay = document.querySelector('.previous-operand');
const currentDisplay = document.querySelector('.current-operand');


const add = function(x,y){
    return x+y;
};
const subtract = function(x,y){
    return x-y;
};
const multiply = function(x,y){
    return x*y;
};
const divide = function(x,y){
    return x/y;
};

const operate = function(operator,numberTwo,numberOne){
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
if(operator === "+"){
    return (numberOne + numberTwo);
}
else if(operator === "-"){
    return (numberOne - numberTwo);
}
else if(operator === "*"){
    return (numberOne * numberTwo);
}
else if(operator === "/"){
    if(numberTwo === 0){
        return null;
    }
    else{
    return (numberOne / numberTwo);
}
}
return 0;
};

let Array1 = [];
let number = '';
let currentOperator = [];
let previousOperator = '';
let previousArray = '';
let previousNumber = '';
let operatedNumber = '';
let newPreviousArray = '';
let reset = false;

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
    Array1.push(button.id);
    number = Array1.join("");
    currentDisplay.textContent = number;
})
});

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
    if(number === null){
        return;
    }
    currentOperator.push(button.id);
    operatedNumber = operate(previousOperator,number,previousNumber);
    if(previousOperator){
    newPreviousArray = `${operatedNumber}${button.id}`;
    currentDisplay.textContent = operatedNumber;
    previousDisplay.textContent = newPreviousArray;
    previousNumber = operatedNumber;
    Array1 = [];
    }
    else if(currentOperator){
    previousArray = `${number}${currentOperator[currentOperator.length-1]}`;
    previousDisplay.textContent = previousArray;
    previousNumber = number;
    Array1 = [];
    }
    previousOperator = currentOperator[currentOperator.length-1];
    number = null;
})
});




allClearButton.addEventListener('click',()=>{
currentDisplay.textContent = '';
previousDisplay.textContent = '';
Array1 = [];
operatedNumber = 0;
previousNumber='';
currentOperator = '';
});

if(operatedNumber){
    equalsButton.addEventListener('click',()=>{
    operatedNumber = operate(button.id,number,previousNumber);
    previousDisplay.textContent = `${newPreviousArray}${equalsButton.id}`;
    currentDisplay.textContent = operatedNumber;
    })
}
