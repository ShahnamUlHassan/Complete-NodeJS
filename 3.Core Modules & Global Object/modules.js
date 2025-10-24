// Importing the built-in 'fs' (File System) module to work with files
const fs = require("fs");

// Importing the built-in 'os' module to get system (Operating System) information
const os = require("os");

// Destructuring log and warn for custom console logging
const { log, warn } = require("console");

// Create a file named 'dummy.txt' and write text into it
fs.writeFileSync("dummy.txt", "trying with modules");

// Display the current OS platform (e.g., win32, linux, darwin)
console.log(os.platform());

// Display the system's hostname (computer name)
console.log(os.hostname());

// Display detailed CPU information (array of CPU core details)
console.log(os.cpus());

// Print a simple string message
console.log("abc");

// Print the directory where the current Node.js process is running
console.log(process.cwd());

// Print the current Node process ID (useful for debugging / monitoring)
console.log(process.pid);

// Using custom console log and warn methods
log("custom log");   // Normal log
warn("custom warn"); // Warning message (usually yellow in console)
