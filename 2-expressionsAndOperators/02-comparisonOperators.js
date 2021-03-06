// EQUAL

'3' == 3;
console.log('3' == 3);

/*
- coercion is the process of converting a value from one type to another
- in the above example, javascript assumes that we are trying to check if a number of 3 is equal to another number of 3, even though one of our values is a string.
*/

// STRICT EQUAL - this overrides javascript coercion

'3' == 3;
console.log('3' == 3);
console.log('3' === 3);

// NOT EQUAL
console.log('3' != 3);

// STRICT NOT EQUAL - this overrides javascript coercion
console.log('3' !== 3);

// GREATER THAN
3 > 2;
console.log(3 > 2);

// LESS THAN
2 < 3;
console.log(2 < 3);

// GREATER THAN OR EQUAL TO
3 >= 2;// not to be confused with => (fat arrow functions)
// LESS THAN OR EQUAL TO
2 <= 3; 

// AND OPERATOR
2 && 3;

// OR OPERATOR
2 || 3;