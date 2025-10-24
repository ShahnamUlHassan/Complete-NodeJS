// Importing data from another file named data.js (must export something)
// Example: module.exports = "Shahnam"
const userName = require("./data")
console.log(userName);   // Display imported value



// Variable declarations
var a = 10;   // var = function scoped
let b = 20;   // let = block scoped
const c = 30; // const = cannot be reassigned

// Updating values of a and b (allowed)
a = 100;
b = 200;

// c ko change nahi kar sakte (const error)
// c = 300;  ❌

// Print the sum
console.log(a + b + c);   // Output: 100 + 200 + 30 = 330



// If / else condition
if (a == 20) {
    console.log("this is if condition");
} else {
    console.log("this is else condition"); // This will run
}



// Function definition
function fruit(item) {
    console.log("this is " + item);
}

// Call the function with arguments
fruit("banana");
fruit("apple");



// FOR LOOP example (0 se 10 tak print karega)
for (var a = 0; a <= 10; a++) {
    console.log(a);
}



// WHILE LOOP example
var a = 0;
while (a <= 10) {
    console.log(a);
    a++;
}



// Array example
var users = ["shahnam", "hassan", "moon", "baig"];
console.log(users[3]); // Access index 3 → "baig"



// Loop through array
for (var a = 0; a < users.length; a++) {
    console.log(users[a]);
}



// Object example
var user = {
    name: "shahnam",
    city: "lahore",
    age: 27
}

console.log(user.age);   // Access object property → 27
