

/*=============================================
=          Function Parameters           =
=============================================*/




/* 
Function Parameters in JavaScript: Step-by-Step Explanation
Function parameters are values that you can pass into a function when you invoke it. These parameters allow you to customize the behavior of the function based on the values passed into it. JavaScript function parameters can range from simple, fixed parameters to more advanced techniques like default parameters, rest parameters, and destructuring parameters.

Let’s walk through the different types of function parameters step by step with examples and real-world use cases.


*/
/* 
Step 1: Basic Function Parameters
When defining a function, you can specify one or more parameters in the function declaration. When you invoke the function, you pass arguments to the function that correspond to the parameters.


*/
// Example 1: Simple Function with Parameters

function greet(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet("Alice", 25);  // Output: Hello, Alice! You are 25 years old.

/* 
Breakdown:
*name and age are the parameters of the greet function.
*When calling the function with greet("Alice", 25), "Alice" and 25 are the arguments passed into the function.
*The function uses these arguments to customize its output.

*/

/* 

Step 2: Default Parameters
In JavaScript (ES6 and beyond), you can assign default values to function parameters. If the caller doesn’t provide a value for a parameter, the default value will be used.


*/

// Example 2: Function with Default Parameters

function greet(name = "Guest", age = 18) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet();  // Output: Hello, Guest! You are 18 years old.
greet("Bob", 30);  // Output: Hello, Bob! You are 30 years old.
/* 
Breakdown:
*The greet function assigns default values of "Guest" to name and 18 to age.
*If you don’t pass any arguments, the default values are used.
*If you pass arguments, those values override the defaults.
*/

/* 
Real-World Use Case: Default Parameters for Configuration
Imagine a function that sends an email. If no priority is specified, you want to set the default priority to "normal".
*/

function sendEmail(to, subject, priority = "normal") {
    console.log(`Sending email to ${to} with subject "${subject}" and priority "${priority}".`);
}

sendEmail("user@example.com", "Welcome!");  // Output: Sending email to user@example.com with subject "Welcome!" and priority "normal".
sendEmail("admin@example.com", "Urgent!", "high");  // Output: Sending email to admin@example.com with subject "Urgent!" and priority "high".


/* 
Step 3: Rest Parameters (...)
Rest parameters allow you to collect multiple arguments into an array. This is particularly useful when you don’t know how many arguments will be passed to the function.
*/

// Example 3: Function with Rest Parameters

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));  // Output: 6
console.log(sum(5, 10, 15, 20));  // Output: 50
/* 
Breakdown:
*The sum function uses the rest parameter syntax (...numbers), *which collects all the arguments into an array called numbers.
*The reduce() method then sums up all the numbers in the array.
*/
/* 
Real-World Use Case: Building a Logging Utility
You might want to build a logging utility that can take any number of messages and log them.
*/

function logMessages(level, ...messages) {
    console.log(`[${level}]`, ...messages);
}

logMessages("INFO", "Server started", "Listening on port 3000"); 
 // Output: [INFO] Server started Listening on port 3000
logMessages("ERROR", "Database connection failed", "Retrying...");  
// Output: [ERROR] Database connection failed Retrying...


function logMessages2(level, ...messages) {
    console.log(`[${level}]`,messages);
}

logMessages2("INFO", "Server started", "Listening on port 3000");  // Output: [INFO] Server started Listening on port 3000
logMessages("ERROR", "Database connection failed", "Retrying...");  // Output: [ERROR] Database connection failed Retrying...


/* 
Step 4: Parameter Destructuring
JavaScript allows you to destructure objects and arrays directly in function parameters. This is particularly useful when working with objects where you only need certain properties.
*/

/* Example 4: Destructuring Objects in Function Parameters */
function displayUser({ name, age, email }) {
    console.log(`User: ${name}, Age: ${age}, Email: ${email}`);
}

const user = { name: "Alice", age: 25, email: "alice@example.com", address: "123 Main St" };
displayUser(user);  // Output: User: Alice, Age: 25, Email: alice@example.com


/* 
Breakdown:
*The function displayUser destructures the name, age, and email properties directly from the user object passed in.
*This approach helps you avoid passing large objects into functions and only take what you need.
*/

/* 
Real-World Use Case: Working with API Responses
APIs often return large objects, and you may only need a few properties from the response. Destructuring makes it easy to extract those specific properties.
*/

function handleApiResponse({ status, data, error }) {
    if (status === 200) {
        console.log("Success:", data);
    } else {
        console.error("Error:", error);
    }
}

const apiResponse = {
    status: 200,
    data: { id: 1, name: "Alice" },
    error: null
};

handleApiResponse(apiResponse);  // Output: Success: { id: 1, name: 'Alice' }


/* 

Step 5: Function Parameters as Functions (Callback Functions)
In JavaScript, functions can be passed as arguments to other functions. This is called using callback functions. It’s useful for asynchronous programming, such as event handling or interacting with APIs.
*/

// Example 5: Passing Functions as Parameters (Callback Functions)

function fetchData(url, callback) {
    setTimeout(() => {
        console.log(`Fetching data from ${url}`);
        callback("Data received!");
    }, 0);
}

function handleResponse(data) {
    console.log(data);
}

fetchData("https://api.example.com", handleResponse);
// Output (after 1 second): Fetching data from https://api.example.com
// Output: Data received!


/*
Breakdown:
* The fetchData function takes a URL and a callback function as parameters.
* After fetching the data (simulated by setTimeout), it invokes the callback function with the result.
* handleResponse is passed as the callback, and it logs the received data.

*/




/* 
Step 6: Named Parameters Using Objects
In some cases, you may want to provide many parameters, but remembering the correct order is difficult. You can use objects to pass named parameters, making it easier to understand and extend the function.
*/

/* 
Example 6: Using Named Parameters with Objects
*/

function createUser({ name, age, role = "guest" }) {
    console.log(`Created user: ${name}, Age: ${age}, Role: ${role}`);
}

createUser({ name: "Alice", age: 25 }); 
 // Output: Created user: Alice, Age: 25, Role: guest
createUser({ name: "Bob", age: 30, role: "admin" }); 
 // Output: Created user: Bob, Age: 30, Role: admin





 /*
 Breakdown:
*  Instead of passing individual parameters, we pass a single object with named properties.
*  This makes the function call more readable and allows for optional parameters (like role).
 */

/* 
Real-World Use Case: Configuring Functionality
When dealing with complex configurations, it’s better to use named parameters for clarity.
*/

function initializeApp({ debug = false, logging = true, version = "1.0" }) {
    console.log(`App initialized with debug=${debug}, logging=${logging}, version=${version}`);
}

initializeApp({ debug: true, logging: false });
// Output: App initialized with debug=true, logging=false, version=1.0



/* 

Step 7: Conclusion
JavaScript offers a variety of ways to work with function parameters, ranging from simple positional arguments to more advanced patterns like default values, rest parameters, and destructuring. Understanding these different techniques allows you to write more flexible, readable, and maintainable code.

Here’s a quick summary of the different approaches to function parameters:

* Positional Parameters: Basic parameters that match the order of arguments passed.

* Default Parameters: Allows you to define fallback values for parameters.

* Rest Parameters: Collects an arbitrary number of arguments into an array.

* Destructuring Parameters: Allows you to extract properties from objects or elements from arrays directly in the parameter list.
**Callback Functions
*/

