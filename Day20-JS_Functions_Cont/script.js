// Understanding Scope
// Scope determines the accessibility of variables and functions in different parts of the code

// Global Scope
let globalVar = "I am global";  // This variable is in the global scope, accessible everywhere in the code

function checkGlobalScope() {
    // Local Scope
    let localVar = "I am local";  // This variable is in the local scope, accessible only within this function
    console.log(globalVar);  // Accessible here because globalVar is in the global scope
    console.log(localVar);  // Accessible here because we are inside the function where localVar is defined
}

checkGlobalScope();
// console.log(localVar);  // Uncaught ReferenceError: localVar is not defined (because localVar is not in the global scope)

// // Arrow Functions vs Regular Function

// // Regular Function
// function add(a, b) {
//     return a + b;
// }

// // Arrow Function
// const addArrow = (a, b) => a + b;



// // Scoping Difference and Scope Chain
// // Lexical scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions

// function outerFunction() {
//     let outerVar = 'I am from outer';

//     function innerFunction() {
//         let innerVar = 'I am from inner';
//         console.log(outerVar);  // 'outerVar' is accessible here due to lexical scoping
//         console.log(innerVar);
//     }

//     innerFunction();
//     // console.log(innerVar);  // Error: innerVar is not accessible here
// }

// outerFunction();

// // The Function Stack
// // JavaScript uses a call stack to manage execution contexts of function calls

// function firstFunction() {
//     console.log("First function started");
//     secondFunction();
//     console.log("First function ended");
// }

// function secondFunction() {
//     console.log("Second function started");
//     thirdFunction();
//     console.log("Second function ended");
// }

// function thirdFunction() {
//     console.log("Third function started and ended");
// }

// firstFunction();
// // This demonstrates the call stack: firstFunction calls secondFunction, which calls thirdFunction

// // Closure

// function createCounter() {
//     let count = 0;

//     return function increment() {
//         count++;
//         console.log(count);
//     };
// }

// const counter = createCounter();  // 'counter' is now a closure
// counter();  // Outputs: 1
// counter();  // Outputs: 2

// // Closures are useful for creating private variables and functions

// // Recursion
// function countDown(number) {
//     console.log(number);
//     if (number > 0) {  // Base condition to stop recursion
//         countDown(number - 1);
//     }
// }

// countDown(5);  // Demonstrates recursion by counting down from 5 to 0

// // Recursion is important for solving problems that can be broken down into smaller, repeating problems
