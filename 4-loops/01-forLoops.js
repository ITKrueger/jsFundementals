/*
- Loops offer us a quick and easy way to do something repeatedly, or loop over something

- there are many different kinds of loops, but they all do roughly the same thing: 
- the loop will repeat until a specified condition evaluates to false

- for loop
- do while loop
- while loop
- for in
- for of

- for loop takes in 3 parameters
1. initial expression
2. condition
3. increment expression

- seperated by semicolon ;
*/

// (1) set var; (2) condition to be met; (3) incrementer
for (let i=0;i<20;i ++){
console.log(i); // body: code to be run if condition is not false
}

// Challenge: using a for loop, count to 20 by 2

for (let i=0;i<21;i += 2){
    console.log(i);
}

// Challenge: using a for loop, count from 10 to 0, going down by 1

for (let i=10;i>=0;i -= 1){
    console.log(i);
}

// Challenge: using a for loop, count from 0 to -24, going down by 2

for(let i=0;i>=-24;i -= 2){
    console.log(i)
}

// Challenge: using a for loop, go through a name and display each character individually

let callsign ="Long_Caster"

for (let i=0;i<11;i ++){
    console.log(callsign[i]);
}

// Challenge: write a for loop that adds all numbers from 1 to 50 (should equal 1275)

let initial = 0

for (let i=1;i<=50;i ++){
    console.log(initial += i);
}