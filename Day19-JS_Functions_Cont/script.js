// Define an object 'shoppingCart' with properties and a method to add items to the cart
let shoppingCart = {
	items: ["apples", "cheese", "butter", "milk"],  // Array of items in the cart
	size: 4,  // Number of items in the cart
	addToCart: function (item) {  // Method to add an item to the cart
		shoppingCart.items.push(item);  // Adds the specified item to the 'items' array
	},
};

// Use the 'addToCart' method to add "grapes" to the shopping cart
shoppingCart.addToCart("grapes");

// // Hoisting example
// // Function declaration: hoisted, can be called before declaration
// function add(num1, num2) {
// 	return num1 + num2;  // Returns the sum of num1 and num2
// }

// // Function expression: not hoisted, must be defined before it can be used
// const makeNoise = function () {
// 	console.log("Kabow!");  // Logs "Kabow!" to the console
// };

// // Call the functions
// add(4, 5);  // 9
// makeNoise();  // Prints "Kabow!"

// // Anonymous functions example
// // Function expression with an anonymous function
// let greet = function (name) {  // Anonymous function that takes 'name' as parameter
// 	return `Hello, ${name}!`;  // Returns a greeting string
// };

// // Call the anonymous function with "Alice" as the argument
// console.log(greet("Alice"));  // 'Hello, Alice!'

// // Object containing methods (functions)
// const calculator = {
// 	add: function (a, b) {  // Method to add two numbers
// 		return a + b;  // Returns the sum
// 	},
// 	subtract: function (a, b) {  // Method to subtract two numbers
// 		return a - b;  // Returns the difference
// 	},
// 	multiply: function (a, b) {  // Method to multiply two numbers
// 		return a * b;  // Returns the product
// 	},
// 	divide: function (a, b) {  // Method to divide two numbers
// 		return a / b;  // Returns the quotient
// 	},
// };

// // Call methods of the calculator object
// calculator.add(3, 6);  // 9
// calculator.subtract(6, 5);  // 1
// calculator.multiply(5, 5);  // 25
// calculator.divide(20, 4);  // 5

// // IIFE (Immediately Invoked Function Expression) example
// // The function executes immediately upon definition
// (function () {
// 	// Code inside the IIFE
// })();

// // IIFE with local scope
// (function () {
// 	let message = "Hello, world!";  // Variable 'message' inside the IIFE
// 	console.log(message);  // 'Hello, world!' is logged to the console
// })();

// // Trying to access 'message' outside of its scope will result in an error
// // console.log(message);  // Error: message is not defined

// // IIFE used for creating a private scope and revealing public methods
// let counter = (function() {
//     let count = 0;  // Private variable 'count'

//     function increment() {  // Private function to increment count
//       count++;
//       console.log(`Count: ${count}`);  // Log the current count
//     }

//     function reset() {  // Private function to reset count
//       count = 0;
//       console.log('Counter reset.');  // Log the reset action
//     }

//     // Publicly exposed methods
//     return {
//       increment: increment,
//       reset: reset
//     };
// })();

// // Use the public methods of the 'counter' object
// counter.increment();  // Increments the count and logs it
// counter.increment();  // Increments the count again
// counter.reset();  // Resets the count
// console.log(counter.count);  // Trying to access private variable 'count' directly will return undefined

// // Functions accepting objects as arguments
// function displayUserInfo(user) {
//     // Logs user's name and age, obtained from the 'user' object
//     console.log('Name: ' + user.name);
//     console.log('Age: ' + user.age);
// }

// // Define a 'user' object
// let user = {
//     name: 'Alice',
//     age: 30
// };

// // Call 'displayUserInfo' passing the 'user' object
// displayUserInfo(user);
// // Output:
// // Name: Alice
// // Age: 30

// // Function accepting an object as an argument to display weather data
// function displayWeather(weatherData) {
//     // Logs weather data obtained from the 'weatherData' object
//     console.log(`Location: ${weatherData.location}`);
//     console.log(`Temperature: ${weatherData.temperature}°C`);
//     console.log(`Conditions: ${weatherData.conditions}`);
// }

// // Define an object containing weather data
// let weatherData = {
//     location: 'San Francisco',
//     temperature: 18,
//     conditions: 'Sunny'
// };

// // Call 'displayWeather' passing the 'weatherData' object
// displayWeather(weatherData);
// // Output:
// // Location: San Francisco
// // Temperature: 18°C
// // Conditions: Sunny
