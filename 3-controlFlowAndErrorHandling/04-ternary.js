// Ternary basically act as a shortcut for writing if & if/else statements

let num = 6;

// Ternary:
(num>0) ? console.log('yes'): console.log('no')

// Instead of:
if(num>0){
    console.log('yes');
    }
else{console.log('no')}

// Conditional with if & else if
if(num>10){
    console.log('a first statement');
}
else if (num<0){
    console.log('another statement');
}
else{
    console.log('yet another, man');
}

(num>10) ? console.log('a first statement') : (num<0) ? console.log('another statement'): console.log('yet another, man');

// Can also rewrite our ternary to make more readable

(num>10) ? console.log('a first statement') 
: (num<0) ? console.log('another statement')
: console.log('yet another, man');

// Write a ternary to do the same thing as the age challenge

let age = 19;

(age>=25)?console.log('You can rent a car!'): (age>=21)?console.log('You can drink!'): (age>=18)?console.log('You can vote!'): console.log("Sorry, you're too young to do anything.")