/*
SCOPE

- scope is how a computer keeps track of all the variables we create in our code
- whenever we open up {} we create a new scope (local scope). Any variables that we create that are locally scoped are only available in that local scope - so not available globally
- globally scoped variables are accessable anywhere in our document
*/

let x = 12;

function scope(){
let x = 33;
console.log(x);
}

scope(); // calling the function by its name, followed by parens, 'invokes' or calls the function - tellings it to run
console.log(x);

//------------------------------

let y = 12;

function newScope(){
    y = 33;
    y = 44;
    y = 55;
    console.log(y);
}

newScope();
console.log(y);

/*
VAR vs LET

- while var and let seem to operate the same - they have a lot of the same functionality (both allow us to declare and initialize variables) - they also behave differently from one another

- var is scoped to the nearest function block {}, and let is scoped to the nearest enclosing block {}
*/

var testOne = 'this is a test';
let testTwo = 'this is another test';

console.log(testOne,testTwo);

// VAR

var x = 12;

function vartest(){
    var x = 33;
    if(1==1){
        var x = 45;
        console.log(x)
    }
    console.log(x)
}

vartest();
console.log(x)

// -----------------------

// LET

let y = 12;

function lettest(){
    let y = 33;
    if(1==1){
        let y = 45;
        console.log(y)
    }
    console.log(y)
}

lettest();
console.log(y)