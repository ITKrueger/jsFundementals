let food = ['Steak','Porkchop','Ham','Pizza','Bread'];

// regular for loop
for(let i=0;i<food.length;i++){
    console.log(food[i])
}

// forEach() method
food.forEach(function(foodItem){
    console.log(foodItem)
});

// forEach() method - fat arrow function
food.forEach(foodItem=>console.log(foodItem));

// -----------------------------------------

let food = ['Steak','Porkchop','Ham','Pizza','Bread'];

for(let i =0; i<food.length;i++){
listMyFood(food[i])
}

function listMyFood(foodItem){
console.log(foodItem)
}

// Look at MDN docs for the forEach() method
// Challenge: in the forEach method, include the optional index parameter, and print that index to console

let food = ['Steak','Porkchop','Ham','Pizza','Bread'];

// concise body arrow function
food.forEach((foodItem, index) => console.log(foodItem, index));

// block body arrow function
food.forEach((foodItem, index) => {
    console.log(foodItem, index);
})

// function declaration
food.forEach(function(foodItem,index){
    console.log(foodItem,index)
})

/*
CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ["Ocean's 11","Die Hard","Ford vs. Ferrari","Snakes on a Plane"]

movies.forEach(function(moviesItem){
    console.log(moviesItem)
})

movies.push('Robocop');

movies.splice(3,1,'The Equalizer');

movies.forEach(function(moviesItem){
    console.log(moviesItem)
})