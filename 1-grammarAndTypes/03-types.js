/*
BOOLEAN

- a Boolean has two possible values; true or false
*/

let lightIsOn = true ;
console.log(lightIsOn);

let lightIsOff = false;
console.log(lightIsOff);

/*
NULL

- null is an empty value. Think of it as an empty container: nothing is in it, but it still exists
as a space to fill
*/

let empty = null;
console.log(empty);

/*
UNDEFINED

- no value has been assigned, and it does not act as an empty container
*/

let undef= undefined;
console.log(undef);

let correct;
console.log(correct);

/*
NUMBERS

- numbers or integers are literally just numbers. Numbers do not need anything special when being written
*/

let degrees = 40;
console.log(degrees);

let precise=999999999999999;
console.log(precise);

let rounded=9999999999999999;
console.log(rounded);

let a = Number('123');
console.log(a);

/*
STRINGS

- strings are datatypes used to represent text and are either wrapped in single or double quotes

*/

let stringOne= "double quotes";
let stringTwo= 'single quotes';
console.log(stringOne,stringTwo);

let first=1050+100;
let second='1050'+'100';

console.log(first); //1150
console.log(second); //1050100

console.log(typeof first); // number
console.log(typeof second); // string

let third=1050 +'100'; // type coersion


console.log(third);
console.log(typeof third);

/*
OBJECT

- objects allow us to store multiple values instead of a single value
- objects are denoted by {}
- objects are hold what are known as key:value pairs

*/

let frodo={race: 'hobbit', rings:1,cloak:true};

//         key     value

console.log(frodo);

/*
ARRAYS

- arrays are containers that hold a list of items
- arrays are denoted by []
*/

let burritos = ['large',4,true];
console.log(burritos);


/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Isaac';
let lastName = 'Krueger';
let houseNumber = 826;
let street = 'N. Wayne';
let city = 'Indianapolis';
let state ='IN';
let zipcode = 46077;
let fullAddress = [firstName,lastName,houseNumber,street,city,state,zipcode];

console.log(fullAddress);


