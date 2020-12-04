/*
- FALSY VALUES: A falsy value is a value that is considered false whe encountered in a boolean context (Booleans are a data type that can only be "true" or "false")

- there are six cases of falsy values in javascript
1. false
2. 0
3. "",'',``
4. null
5. undefined
6. NaN (Not a Number)

- this means that when javascript is expecting a boolean and is given one of these values, it will always evaluate to "falsy".
*/

let isOn = true;

// read as, if the variable isOn is EQUAL to true, run the body
if(isOn == true){console.log('The light is on.')};
// read as, if "isOn" is true, run the body
if(isOn){console.log('The light is still on.')};

let isOff = false;

// read as, if "isOff" is EQUAL to false, run the body
if(isOff == false){console.log('The light is off.')};

let weather = 65

if(weather < 70){console.log('Grab a jacket.')};