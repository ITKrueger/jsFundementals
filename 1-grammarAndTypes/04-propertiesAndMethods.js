/*
PROPERTIES AND METHODS

-In most cases, properties are qualities related to the data we're working with, and methods are actions we can perform on the data we're working with. Using a method causes something to happen to the data, while using a property returns information about the data

- .property and .methods()
   - methods have parens behind them, properties do not
*/

// STRING PROPERTIES

// LENGTH

let myName = 'Tech';

console.log(myName.length);

// STRING METHODS

let otherName = 'Argus';

console.log(otherName.toUpperCase());// change a string to uppercase

let home = 'In Indianapolis';
console.log(home.includes('Indianapolis'));

// challenge: use google, find MDN documentation for string methods. Research the string '.split' method, and use and implement it to get an array back from a string.

let sent = 'This sentence will be split into individual parts';

console.log(sent.split('')); // splits at each individual character
console.log(sent.split(' ')); // splits at each space
console.log(sent.split(',')); // splits at a comma