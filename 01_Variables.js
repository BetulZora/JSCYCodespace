// for a single line comment
/* MultiLine comment 
*/

// declare a variable named "message"
let message;

// store "Hello" in the variable
message = 'Hello';

console.log(message);

// re-assign new value
message = "Hello World!";
console.log(message);

// can create two variables on the same line
let admin, username;
username = 'John';
admin = username;
console.log(admin);

let a;
console.log(typeof a); // undefined
a = 5;
console.log(typeof a); // number type is inferred.
a = 'Cydeo';
console.log(typeof a); // type changed to string
a = true;
console.log(typeof a); // type changed to boolean

let x =5, y = 'Cydeo';
console.log(x+y); // concatenates 5Cydeo
console.log(x*y); // returns NaN

const b = 45; // this is now unassignable
b = 30;