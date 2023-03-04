const readline = require('readline-sync');

const firstNumber = readline.questionInt('Please enter your first number: ');
    console.log(firstNumber)
const secondNumber = readline.questionInt('Please enter your second number: ');
    console.log(secondNumber)
readline.setDefaultOptions = ({limit:['add', 'subtract', 'multiply', 'divide']});
const operation = readline.question('Please enter your operation - "add", "subtract", "multiply", "divide": ');
   console.log(operation)

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber; 
}; 
function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
};
function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber; 
}; 
function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber; 
}; 

function theCalculation(firstNumber, secondNumber, operation){
    if(operation === "add"){
        console.log("The result is: " + add(firstNumber, secondNumber));
    } else if(operation === "subtract"){
            console.log("The result is: " + subtract(firstNumber, secondNumber)); 
    } else if(operation === "multiply"){
            console.log("The result is: " + multiply(firstNumber, secondNumber));
    } else if(operation === "divide"){
            console.log("The result is: " + divide(firstNumber, secondNumber)); 
    }   
}
theCalculation(firstNumber, secondNumber, operation)