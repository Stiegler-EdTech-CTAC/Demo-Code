// Object with method demonstrating 'this' context
const thisIsMyAdminObjectThatHasALongName = {
    name: 'Erin',
    // Method that logs the object's name using 'this' to refer to the object itself
    consoleName: function() {
        console.log(this.name); // Logs 'Erin'; 'this' refers to the object itself
    },
}

// Nested function demonstrating lexical 'this' behavior
function ask() {
    function say() {
        console.log(this.name); // In non-strict mode, 'this' refers to the global object; in strict mode, 'this' is undefined
    }
    say(); // Inner function is invoked where 'this' context is not the 'ask' function but global/window object
}

ask(); // Invoke 'ask' which in turn calls 'say' showing different 'this' context
console.log(this); // In a browser, logs the global 'window' object; shows the current global context
thisIsMyAdminObjectThatHasALongName.consoleName(); // Invokes method, logging 'Erin' as 'this' refers to the object

// Object demonstrating how 'this' behaves in methods
const test = {
    prop: 42,
    // Method that returns the object's property using 'this'
    func: function () {
        return this.prop; // 'this' refers to 'test' object, so it returns 42
    },
};

console.log(test.func()); // Logs '42', demonstrating how 'this' accesses object properties in methods

// Class definition with constructor and method
class Animal {
    constructor(name, call) {
        this.name = name; // Assigns the 'name' parameter to the instance's 'name' property
        this.call = call; // Assigns the 'call' parameter to the instance's 'call' property
    }

    // Method that logs the call of the animal
    sayCall() {
        console.log(this.call); // 'this' refers to the instance, logs the animal's call
    }
}

let dog = new Animal('dog', 'woof'); // Instantiate 'Animal' with 'dog' properties
dog.sayCall(); // Calls 'sayCall' method on 'dog' instance, logging 'woof'

// Demonstrating higher-order array functions with a products array
const products = [
    { id: 1, name: 'Chair', price: 100 },
    { id: 2, name: 'Table', price: 200 },
    { id: 3, name: 'Lamp', price: 50 },
    { id: 4, name: 'Sofa', price: 400 }
];

// Filter function to create a new array of items with price greater than 100
const expensiveItems = products.filter(function(item) {
    return item.price > 100; // Condition to include item in the result array
});
console.log('Expensive Items:', expensiveItems); // Logs filtered array

// Find function to get the first item that matches the condition
const table = products.find(function(item) {
    return item.name === 'Table'; // Condition to find the item named 'Table'
});
console.log('Found Item:', table); // Logs the found item

// Map function to create a new array of product names
const itemNames = products.map(function(item) {
    return item.name; // Returns the name property of each item
});
console.log('Item Names:', itemNames); // Logs the new array of names

// Reduce function to accumulate the total price of all items
const totalValue = products.reduce(function(accumulator, item) {
    return accumulator + item.price; // Adds the item's price to the accumulator
}, 0); // Initial value of accumulator is 0
console.log('Total Value:', totalValue); // Logs the total price

// ForEach function to execute a provided function once for each array element
console.log('Products List:');
products.forEach(function(item) {
    console.log(`${item.name}: $${item.price}`); // Logs each product's name and price
});

// Some function to test whether at least one element in the array passes the provided function
const hasCheapItems = products.some(function(item) {
    return item.price < 100; // Condition to check for items cheaper than 100
});
console.log('Has Cheap Items:', hasCheapItems); // Logs boolean result of the condition

// At function to return the item at a specified index
const firstItem = products.at(0); // Get the first item
const lastItem = products.at(-1); // Get the last item using negative index
console.log('First Item:', firstItem); // Logs the first item
console.log('Last Item:', lastItem); // Logs the last item

// Using 'includes' to check if an array contains a certain value
const itemNamesList = products.map(item => item.name);
const containsTable = itemNamesList.includes('Table');
console.log('Contains Table:', containsTable); // Logs true if 'Table' is in the itemNamesList array
