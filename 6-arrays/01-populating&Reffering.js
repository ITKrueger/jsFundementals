/*
- arrays are containers that hold a list of items
- denoted by []
- arrays can hold numerous data types
*/

let list = ['orange','banana','apple'];

console.log(list[1]);

/*
- when we call an array, we can append square brackets onto the end of our array with the index number that we want to reference.
- javascript starts counting at 0
*/

let pilots = ['Mage','Count','Wiseman','Trigger',4,true,['Drone','Another Drone','Advanced Drone','Sol 1']];

console.log(typeof pilots); // object
console.log(pilots instanceof Array); // instanceof operator is used to check the type of an object at run time. Will return a true or false value.

console.log(pilots[1]); // returns Count
console.log(pilots[2]); // returns Wiseman

// CHALLENGE: dive into the nested array in the pilots array, and pull out one of the values

console.log(pilots[6][3]); // returns Sol 1

let id = pilots[6][2];
console.log(id); // returns Advanced Drone