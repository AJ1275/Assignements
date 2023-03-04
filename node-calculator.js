var readline = require('readline-sync')

const firstNumber = readline.questionInt('Please enter your first number: ');
    console.log(firstNumber)
const secondNumber = readline.questionInt('Please enter your second number: ');
    console.log(secondNumber)
readline.setDefaultOptions = ({limit: [add, subtract, multiply, divide]});
const operation = readline.question('Please enter your operation: ');
    console.log(operation);

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
    

if(operation === "add"){
    console.log("The result is: " + add);
} else if(operation === "subtract"){
        console.log("The result is: " + subtract); 
} else if(operation === "mulitply"){
        console.log("The result is: " + multiply);
} else if(operation === "divide"){
        console.log("The result is: " + divide); 
};