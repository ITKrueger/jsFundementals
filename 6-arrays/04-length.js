/*
- just like with strings, we can attach the length property to an array, and it will give us the length of the array
- The length property doesn't start counting at 0 like when working with indices, it simply counts how many items are present
*/

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

/*
CHALLENGE
************
    - First check if you are working with an array
    - Using a method, flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
*/

let arr = [1,2,3,4,5];

console.log(arr instanceof Array);

//arr.splice(0,2,5,4);
//arr.splice(3,2,2,1);
arr.reverse()

arr.forEach(function(arrItem){
    console.log(arrItem)
})