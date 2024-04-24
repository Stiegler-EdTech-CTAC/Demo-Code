// Creating a new Promise that simulates fetching data with a delay
let myPromise = new Promise((resolve, reject) => {
    // Simulating a database call with setTimeout
    setTimeout(() => {
        let data = ['this', 'is', 'some', 'data'];
        if (data) {
            resolve(data); // If data is truthy, resolve the promise with the data
        } else {
            console.log(data);
            reject("O NO, that didn't work"); // If data is falsy, reject the promise
        }
    }, 4000); // 4000 milliseconds delay
});

myPromise
    .then((data) => {
        // Handling resolved data
        setTimeout(() => {
            let manipulatedData = data.map(item => item += " (s)"); // Manipulate the data
            return manipulatedData; // Return manipulated data but it's not used due to missing return in setTimeout
        }, 2000); // 2000 milliseconds delay
    })
    .then((data) => {
        // This 'then' does not receive 'manipulatedData' due to the missing return statement in the previous then
        data.forEach((item) => console.log(item)); // This would cause an error because 'data' is undefined
    })
    .catch((error) => {
        console.log(error); // Handle any errors
    });

// Assuming 'fetchData' is a function that returns a promise
fetchData("https://api.example.com/data1")
    .then((data1) => {
        console.log("Fetched data1:", data1); // Log the fetched data
        let data2 = fetchData("https://api.example.com/data2"); // Fetching the next data
        return data2; // Return the promise for the next 'then'
    })
    .then((data2) => {
        console.log("Fetched data2:", data2); // Log the fetched data
    })
    .catch((error) => {
        console.error("Error fetching data:", error); // Handle any errors from the entire chain
    });

// Simultaneous fetch requests demonstration (not in a sequence, just demonstrating multiple fetch calls)
// These fetches will execute in parallel but will not necessarily complete in the order they are started
fetchData("https://api.example.com/data1"); // First initiated fetch
fetchData("https://api.example.com/data2"); // Second initiated fetch
fetchData("https://api.example.com/data3"); // and so on...
fetchData("https://api.example.com/data4");
fetchData("https://api.example.com/data5");
fetchData("https://api.example.com/data6");

// Example of using async/await for fetching data
let goGetData = async () => {
    // Using 'await' to wait for the fetch to complete
    let rawData = await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonData = await rawData.json(); // Converting the response to JSON

    console.log(jsonData); // Log the fetched data

    return jsonData; // Return the fetched data
}

goGetData(); // Calling the async function to execute the fetch operation

let getMeme = async () => {
    // Fetching data asynchronously
    let rawData = await fetch('https://api.imgflip.com/get_memes');
    let jsonData = await rawData.json();
    let meme = jsonData.data.memes[0].url; // Assuming the API response structure to access meme URL

    console.log(meme); // Log the meme URL

    return jsonData; // Return the JSON data
}

getMeme(); // Calling the async function to get a meme

// Example of a fetch call using the .then syntax to process the response
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // Convert the response to JSON
    .then(result => console.log(result)) // Log the result
    .catch(); // Catch block to handle any errors

// Demonstrating the Promise object itself (likely meant to log the promise constructor or function)
console.log(Promise);

// Example of an async function with try/catch for error handling
async function getData() {
    try {
        // Attempt to fetch data and await its resolution
        let data = await fetch('someurl'); // This would need a valid URL to work correctly
    } catch (error) {
        // Catch and log any errors that occur during the fetch
        console.log(error);
    }
}
