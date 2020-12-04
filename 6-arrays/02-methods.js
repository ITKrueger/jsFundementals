/*
ARRAY METHODS

- array methods are methods or functions that are built into JS, that we can use to make our lives as developers easier
*/

let food = ['Steak','Porkchop','Ham','Pizza','Bread'];

// array.push() - allows us to push one or more elements to the end of our original array. Push method will always add the new elements to the END of the array
food.push('Salad');
console.log('push:',food);

// array.splice() - the splice method allows us to add and remove elements from an array
food.splice(2,1,'Apple');
console.log('splice:',food);

food.splice(3,1,'Soup');
console.log('splice 2:',food);

food.splice(4,0,'Potato');
console.log('splice 3:',food);

// array.pop() - the pop method removes the last item from an array
food.pop();
console.log('pop:',food);

// array.unshift() - the unshift method adds one or more elements to the beginning of an array
food.unshift('Carrot','Steak');
console.log('unshift:',food);