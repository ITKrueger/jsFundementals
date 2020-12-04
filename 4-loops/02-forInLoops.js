/*
FOR IN LOOPS

- great for iterating over values in an object. Properties in an object are what are known as enumerable properties. Enumerable simply means that the properties can be counted.
- for in loops iterate over an objects enumerable properties
*/

// objects hold what are called key/value pairs

let pilot={
    // key      value      - values are assigned using a :, not an =
    callsign: 'Wiseman',
    skills: true,
    aircraft: 'F/AE 18',
    tour: 4,
}

for (let item in pilot){
   // console.log(item) gives the key
   console.log(pilot[item]); // gives value of the key
}

let catArray = ['Tiger', 'Panther', 'Cougar', 'Hellcat', 'Leopard']

for (let cat in catArray){
    console.log(cat); // gives the index
    console.log(catArray[cat]); // gives the value of the index
}

// Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name

let company='sIkOrSkY'
let compName;

for (let index in company){
    //console.log(index) // gives indexes of company variable, 0 1 2 3 etc
    if(index==0){
        compName = company[index].toUpperCase();
    }else{compName += company[index].toLowerCase()
    };
}
console.log(compName);