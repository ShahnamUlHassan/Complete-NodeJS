// Import the built-in 'fs' (File System) module to work with files
var fs = require("fs");

// Create (or overwrite) a text file named "Shahnam.txt" and write the given content into it
fs.writeFileSync("Shahnam.txt", "my name is Shahnam");

// Log simple arithmetic and text messages to the console
console.log(20 + 20); // Prints the result of 20 + 20 (which is 40)
console.log("Shahnam Ul Hassan"); // Prints the string "Shahnam Ul Hassan"

// Define a function named 'fruit' that takes one argument 'item' and prints the fruit name
function fruit(item) {
    console.log("Fruit name is " + item);
}

// Call the 'fruit' function with the argument "apple"
fruit("apple");

// Declare two variables 'a' and 'b', assign numbers to them, and print their sum
var a = 10;
var b = 20;
console.log(a + b); // Prints the result of 10 + 20 (which is 30)
