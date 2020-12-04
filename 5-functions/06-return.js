/*
RETURN

- the return keyword allows us to return a variable or value that is local to the scope of a function, and access that variable or value within the global scope of the document
*/

// function declaration
function myName(fName){
console.log(fName);
return fName; // parens can or cannot be included and it will still return the value
}
// can only have one return in a function

myName('Isaac');
console.log(fName);

// when we return a value from a function, we need to assign the call of our function to a variable to capture the return value from the function

let myNameIs = myName('Isaac');// when this line of code is read, the function will run before anything else. Since we're returning a value from that function, our return value is the value that will be assigned to our variable of myNameIs
console.log(myNameIs);

function aList(){
    let a = 'A';
    let b = 'B';
    let c = 'C';

    let ABC=`The first three letters of the alphabet are ${a} ${b} and ${c}`;

    return ABC
}

// BLOCK BODY ARROW FUNCTION

function myName(fName){
    //console.log('console.log from function', fName);
    let myVar = `${fName}, ${fName} the magical fruit`;
    return myVar;
    
}

let nickName = 'Tech';
let captureReturn = myName(nickName);
console.log(captureReturn);

let myName = fName => {
    return fName;
}

let myNameIs = myName('Insert_Here');
console.log(myNameIs);

// CONCISE BODY ARROW FUNCTION
let name = (lName) => lName; //return keyword not needed in the case of a concise body arrow function - it happens by default 

let captureReturn = name('Insert_There');
console.log(captureReturn);