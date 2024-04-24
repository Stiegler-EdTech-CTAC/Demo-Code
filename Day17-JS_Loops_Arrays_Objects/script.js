// While Loops
let myNum = 0;  // Initialization of the loop variable

while (myNum < 10) {  // Condition for the loop to continue
    console.log(myNum);  // Output the current value of myNum
    myNum += 1;  // Increment the loop variable
}

// Do While Loop
// let myOtherNum = 0;  // Initialization of the loop variable

// do {
//     console.log(myOtherNum);  // Output the current value of myOtherNum
//     myOtherNum++;  // Increment the loop variable
// } while (myOtherNum < 10);  // Condition for the loop to continue

// For Loops
// let str = '';  // Initialize an empty string

// for (let i = 0; i < 10; i++) {  // Loop from 0 to 9
//     str += i;  // Concatenate the current number to the string
//     console.log(str);  // Output the current string
//     if (i > 5) {  // Check if the loop variable is greater than 5
//         console.log("That string is getting pretty big");  // Output a message
//     }
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);  // Output the loop variable
//     console.log("This is before the break");  // Output a message
//     break;  // Exit the loop
//     // This line will not execute because 'break' exits the loop immediately
//     console.log("This is after the break");
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);  // Output the loop variable
//     console.log("This is before the continue");  // Output a message
//     continue;  // Skip to the next iteration of the loop
//     // This line will not execute because 'continue' skips to the next loop iteration
//     console.log("This is after the continue");
// }

// Arrays

// Good practice: Using an array to store a list of strings
// let myNameArray = ["John", "Susie", "Jose", "Issa"];

// Less good practice: Using multiple variables for what could be an array
// let myName1 = "John";
// let myName2 = "Susie";
// let myName3 = "Jose";
// let myName4 = "Issa";

// console.log(myNameArray);  // Output the entire array

// console.log(myNameArray[2]);  // Access and output the third element of the array

// Modifying an element of the array
// myNameArray[1] = "Sally";

// console.log(myNameArray);  // Output the modified array

// Outputting the length of the array
// console.log("My Array's Length is " + myNameArray.length);

// Array containing nested arrays
// let differentAnimals = ["dog", "cat", "bird", ["pig", "hedgehog", ["goat", "cow"]], "fish"];

// Accessing nested elements in a multi-dimensional array
// console.log(differentAnimals[3][2][1]);  // Outputs "cow"

// Adding an element to the end of the array
// let plants = ['juniper', 'banana', 'shrub', 'orchid', 'fern'];
// plants.push('moss');
// console.log(plants);  // Output the array after adding an element

// Removing the last element from the array and storing it
// let myLastPlant = plants.pop();
// console.log(plants);  // Output the array after removing the last element
// console.log(myLastPlant);  // Output the removed element

// Example of using a for loop to filter elements from the array
// let newArray = [];
// for (let i = 0; i < plants.length; i++) {
//     console.log(plants[i]);  // Output each element
//     if (plants[i] === 'banana') {  // Check if the element is 'banana'
//         newArray.push(plants[i]);  // Add 'banana' to the newArray
//     }
// }
// console.log(newArray);  // Output the newArray containing 'banana'

// Removing the first element and adding a new one at the beginning of the array
// let plants = ['juniper', 'banana', 'shrub', 'orchid', 'fern'];
// plants.shift();  // Remove the first element
// plants.unshift("oak");  // Add 'oak' at the beginning
// console.log(plants);  // Output the modified array

// Objects
// Define an object 'user' with various properties and nested object 'dependent'
// let user = {
// 	name: "John Doe",  // String property
// 	email: ["john@mail.com", "john2@mail.com"],  // Array property
// 	age: 31,  // Number property
// 	isActive: true,  // Boolean property
// 	dependent: {  // Nested object property
// 		name: "Sally Sue",  // Nested string property
// 		age: 32,  // Nested number property
// 		email: ["sally@mail.com", "sally2@mail.com"],  // Nested array property
// 	},
// };

// Declare a variable 'myVariable' and assign it the value "name"
// let myVariable = "name";

// Access the property of 'user' using the value of 'myVariable' (dynamic property access) and log it
// console.log(user[myVariable]);  // Outputs "John Doe"

// Update the 'name' property of the 'user' object
// user.name = "Susan Derby";

// Add a new property 'status' to 'user' object
// user.status = 'Online';

// Update the 'dependent' property of 'user' object to a string value
// user.dependent = 'Sally';

// Log the updated 'user' object
// console.log(user);