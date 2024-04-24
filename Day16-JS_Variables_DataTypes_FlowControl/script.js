// Prints "Hey Class" to the console
console.log("Hey Class");

// Declares a variable named 'dog' and assigns it the string value 'Tofu'
let dog = 'Tofu';

// Declares a constant variable named 'bird' with the string value 'sir chirp'
const bird = 'sir chirp';

// Declares a variable 'myNumber' and assigns it the integer value 233535324
let myNumber = 233535324;

// Declares boolean variables 'myBoolean' and 'myOtherBoolean' with true and false values respectively
let myBoolean = true;
let myOtherBoolean = false;

// Declares a variable 'myLargeNumber' with a large integer value
let myLargeNumber = 23425892342394320948828937498273947234n;

// Declares variables 'num1', 'num2', and 'num3' with null, undefined (implicitly), and explicitly undefined values respectively
let num1 = null;
let num2; // implicitly undefined
let num3 = undefined;

// Logs the values of 'num1', 'num2', and 'num3' to the console
console.log(num1); // null
console.log(num2); // undefined
console.log(num3); // undefined

// Declares variables 'myVar' and 'mySecondVar' with string and number types respectively
let myVar = "32452";
let mySecondVar = 32452;

// Declares a variable with a non-descriptive name and assigns a string to it
let sdlkfj = 'this';

// Declares a variable 'g' and assigns an integer to it, then reassigns a string value later
let g = 34;
g = 'giraffe'; // Reassigning a different data type (string)

// Evaluates the type of 'g' using typeof operator
typeof g; // 'string'

// Logs the type of 'g' to the console
console.log(typeof g); // 'string'

// Declares an empty string variable 'username'
let username = '';

// Declares a variable 'thisData' and assigns a string to it, then reassigns another string later
let thisData = 'This';
console.log(thisData); // 'This'
thisData = 'SomethingElse';
console.log(thisData); // 'SomethingElse'

// Demonstrates implicit type coercion by adding numbers and string
let sum = 4+4+4; // Numeric addition
console.log(typeof sum); // 'number'

let sum1 = 4+4+"4"; // Starts with numeric addition then concatenates string '4'
console.log(typeof sum1); // 'string'

// Concatenates strings to form a sentence
let mySentence = "This " + "is " + "a " + "sentence";
console.log(mySentence); // 'This is a sentence'

// Declares a number variable and logs its type
let myNums = 2345;
console.log(typeof myNums); // 'number'

// Converts a number to a string using toString method
let numNumString = myNums.toString();
console.log(typeof numNumString); // 'string'

// Flow Control

// If statement
// Declares a number variable and compares it within a range using a logical AND operator
let myNum = 36;
let myOther = "36";
if (myNum > 20 && myNum < 35) {
    console.log("they are the same");
} // This block will not execute as myNum is not less than 35


// if-else statement
if (age > 18) {
    // If the condition (age greater than 18) is true, execute this block
    console.log("You are an adult.");
} else {
    // If the condition is false, execute this block
    console.log("You are a minor.");
}

// switch case
switch (job) {
    // The switch statement evaluates the 'job' variable
    case 'teacher':
        // If 'job' is equal to 'teacher', execute this block
        console.log("Teaches kids.");
        break; // Exits the switch statement after executing the case block

    case 'driver':
        // If 'job' is equal to 'driver', execute this block
        console.log("Drives a cab.");
        break; // Exits the switch statement after executing the case block

    default:
        // If 'job' doesn't match any case, execute this block
        console.log("Does something else.");
        // No break needed in the default case as it's the last statement in the switch
}
