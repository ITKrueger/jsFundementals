/*
FOR OF LOOPS

- where for in loops look at enumerable, or countable properties - for of loops look at iterable properties 
-iterable properties are properties that we can parse through with numbers, or indices

- for in loops: better suited for objects
- for of loops: better suited for arrays
*/

// using a for loop with an object will throw an error since for of loops look at iterable properties, and objects have what are known as enumerable, or countable, properties

let pilot={
    // key      value      - values are assigned using a :, not an =
    callsign: 'Wiseman',
    skills: true,
    aircraft: 'F/AE 18',
    tour: 4,
}
/* ^This object is not iterable
for (let item of (pilot)){
    console.log(item)
}
*/

let catArray = ['Tiger', 'Panther', 'Cougar', 'Hellcat', 'Leopard']

for (let cat of (catArray)){
    console.log(cat);
}
// Note difference in amount of code between above loop (for of loop) and below loop (for loop)
for (let i=0;i<catArray.length;i++){
    console.log(catArray[i]);
}