"use strict";
let userName = "student";
let userAge = 19;
let isHuman = true;
console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof isHuman);
function display(name, age, isHuman) {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`isHuman: ${isHuman}`);
}
display(userName, userAge, isHuman);
// userAge="twenty-five" Error: Type 'string' is not assignable to type 'number'
