// Demonstrating the parsing and execution phases in JavaScript
console.log("Hello, World!");
// The JavaScript engine first parses the code, then executes it line by line.
// This line logs "Hello, World!" to the console as part of the execution phase.

// Demonstrating variable hoisting in JavaScript
console.log(x); // Output: undefined
// Variables declared with 'var' are hoisted, meaning they are known to the entire scope but not initialized.
// At this point, 'x' is hoisted and exists but its value is undefined.

var x = 5;
// Now 'x' is assigned the value 5.

console.log(x); // Output: 5
// The variable 'x' now holds the value 5 and logs it to the console.

// Uncommenting the lines below would cause a ReferenceError due to 'y' being used before declaration.
// This illustrates the Temporal Dead Zone (TDZ) for 'let' and 'const' variables.
// console.log(y); // Causes a ReferenceError: Cannot access 'y' before initialization
let y = 5;
// Variables declared with 'let' are hoisted but not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is encountered.

console.log(y); // Output: 5
// After initialization, 'y' logs the value 5 to the console.

// Example of function calls and the call stack in JavaScript
function first() {
    console.log("First function");
    second(); // Calls the second function within the first function
}

function second() {
    console.log("Second function");
    third(); // Calls the third function within the second function
}

function third() {
    console.log("Third function"); // This is the last function in the call stack
}

first(); // Initiates the chain of function calls, outputting "First function", "Second function", "Third function"

// Demonstrating asynchronous function execution with async/await
async function asyncFunction() {
    return "Hello, World!";
    // An async function returns a promise, resolved with the value "Hello, World!"
}

asyncFunction().then((result) => console.log(result));
// The promise returned by asyncFunction is handled, logging "Hello, World!" to the console when the promise is fulfilled.
