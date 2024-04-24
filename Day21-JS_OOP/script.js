// Define a Car class
class Car {
    constructor(model, make, year) {
        this.model = model; // Assigns model to the Car instance
        this.make = make;   // Assigns make to the Car instance
        this.year = year;   // Assigns year to the Car instance
        this.speed = 60;    // Default speed in mph
        this.time = 1;      // Default time in hours
    }

    mph() {
        return this.speed / this.time; // Calculates speed in miles per hour
    }
}

// Creating an instance of the Car class
let sedan = new Car('Camry', 'Toyota', 2015);

// Displaying the sedan object and its methods
console.log(sedan);
console.log(new Car);

// User related variables and function
let userName = "Jerry";
let isActive = true;

// Arrow function to get user info
let getUserInfo = (name, status) => {
    name = userName;   // Sets name to userName
    status = isActive; // Sets status to isActive

    return "Username: " + name + " status: " + status; // Returns a string of user info
};

// User object with a method
let user = {
    name: "Jerry",
    status: true,
    getUserInfo: (user, status) => {
        user.user;
        user;
        // This function doesn't return anything meaningful
    },
};

// Define a User class
class User {
    constructor(name, status) {
        this.name = name;   // Assigns name to the User instance
        this.status = status; // Assigns status to the User instance
    }
    getUserInfo() {
        return this.name + this.status; // Returns a string combining user and status
    }
}

// Creating instances of the User class
const Jerry = new User("Jerry", true);
const Mary = new User("Mary", true);
const Saj = new User("Saj", true);

// Define a Book class
class Book {
    constructor(title, author, year) {
        this.title = title; // Assigns title to the Book instance
        this.author = author; // Assigns author to the Book instance
        this.year = year; // Assigns year to the Book instance
    }
    getBookSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
        // Returns a formatted string summarizing the book
    }
    getBookAge() {
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} years old.`;
        // Returns the age of the book
    }
    reviseYear(newYear) {
        this.year = newYear; // Updates the year of the book
        this.revised = true; // Marks the book as revised
    }
    static getTopBookStore() {
        return "Barnes & Noble"; // Returns the name of a bookstore
    }
}

// Creating an instance of the Book class
let myBook = new Book("This is a Book about Plants", "Hector Gonzalez", 2022);

// Define a CookBook class that extends Book
class CookBook extends Book {
    constructor(title, author, typeOfFood) {
        super(title, author); // Calls the parent class constructor
        this.typeOfFood = typeOfFood; // Additional property specific to CookBook
    }
}

// Creating an instance of the CookBook class
let bbqBook = new CookBook("The South's Best Hogs", "Hector Gonzalez", "Southern Food");

// Displaying the book and cookbook objects
console.log(myBook);
console.log(bbqBook);
