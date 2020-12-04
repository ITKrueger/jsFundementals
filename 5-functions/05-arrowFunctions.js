/*
ARROW FUNCTIONS

- arrow functions, also commonly referred to as fat arrow functions, are basically a more concise way to write a function expression - not a function declaration

- function expressions do NOT get hoisted, unlike function declarations
*/

// BLOCK BODY

let hello = () => {  // any parameters that your function may hold will go inside the set of parens ()
console.log('Hello World')
}

hello ();
// regular function expression

let hello = function (){

}

// CONCISE BODY ARROW FUNCTION

let hello = () => console.log('Hello World')

hello ();

/*
NOTE: concise body arrow functions return any value by default, whereas block body arrow functions do not - we need to implicitly specify what value we want to return
*/

// CONCISE BODY VS BLOCK BODY

// concise body arrow function
let apples = (number) => console.log(`There are ${number} apples.`)
// when we have a single parameter its not necessary to include parentheses where the parameter would go

apples(10);
apples(5);
apples('five');

// parens ARE needed when no or multiple parameters are provided

// no parameters
let apples = () => console.log('');

// multiple parameters
let apples = (numberOne,numberTwo) => console.log('');

// -----------------------------------

// block body arrow function

let apples = number =>{
    console.log(`There are ${number} apples.`)
}

apples(10);
apples('ten');
apples(false)

/*

*/