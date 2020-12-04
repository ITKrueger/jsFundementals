// function expressions are stored inside of a variable

let hello = function (){ // an unnamed function is known as an anonymous function. Since the function is stored in a variable, we don't need to explicitly give the function a name.
console.log('hi!')
}

hello(); // when calling a function expression, the name of the variable is what needs to be called

/*
DIFFERENCES BETWEEN FUNCTION DECLARATIONS AND FUNCTION EXPRESSIONS

- function declarations are hoisted
- function expressions are NOT hoisted
*/

// declaration
decTest();
function decTest(){
    console.log('It worked and I was hoisted');
}

//expression
exTest();
let exTest = function (){
    console.log("didn't work and I was not hoisted");
}

