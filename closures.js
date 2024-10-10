
/*=============================================
=        Closures in JavaScript                =
=============================================*/
/* 
* Closures in JavaScript: Step-by-Step Explanation
A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function’s variables, even after the outer function has finished executing. Closures are created every time a function is created, whether it is inside another function or not.

* Understanding closures can be difficult at first, but once you grasp how they work, they become a powerful tool in JavaScript for creating private variables, function factories, and more.

* Let’s break down closures step by step and provide a real-world example.


*/


/*
Step 1: Understanding Function Scope
Before diving into closures, it's important to understand function scope. When you define a function, it creates its own local scope. Variables defined inside a function are not accessible outside of it, and vice versa.


*/

function outer() {
    let outerVar = "I'm from the outer function";
    console.log(outerVar);  // Output: I'm from the outer function
}

outer();

// console.log(outerVar);  // Error: outerVar is not defined outside the function

/* 
outerVar is only accessible inside the outer() function, not outside.
*/


/* 
Step 2: Defining Inner Functions
In JavaScript, you can define a function inside another function. The inner function can access variables from its own scope as well as variables from the outer (parent) function’s scope.



*/

function outer() {
    let outerVar = "I'm from the outer function";
    
    function inner() {
        console.log(outerVar);  // Accesses outer function's variable
    }
    
    inner();  // Calling the inner function
}

outer();  // Output: I'm from the outer function
/* 
The inner function can access outerVar from the outer function, even though outerVar is not defined inside the inner function.
*/





/*
Step 3: Closure Explained
* Here’s where closures come into play. A closure is created when an inner function accesses variables from its outer function’s scope even after the outer function has finished executing.

* The inner function "closes over" the variables from the outer function, preserving them in memory. These variables are remembered and available to the inner function, even after the outer function has completed.


*/

function outer() {
    let count = 0;

    return function inner() {  // Closure
        count++;
        console.log(count);
    };
}

let counter = outer();  // The outer function returns the inner function

counter();  // Output: 1
counter();  // Output: 2
counter();  // Output: 3
/* 
Breakdown:
? 1) outer() function:

*The outer() function defines a variable count and returns the inner function inner().
*After outer() finishes, its variables (count) should normally be gone.

? 2) inner() function (closure):

* The returned inner() function forms a closure. It remembers the variable count from the outer function, even though outer() has already completed.
* Each time counter() is called, the closure increments and logs the count variable.

? 3) Why it works:

* Because inner() is a closure, it holds onto the count variable, allowing it to maintain state across multiple calls.


*/

/* 

Step 5: Real-World Example: Private Variables
! One of the most common real-world use cases of closures is to create private variables. JavaScript doesn’t have built-in privacy for variables, but closures can be used to simulate this behavior.


*/

// Let’s create a counter that has private state:

function createCounter() {
    let count = 0;  // Private variable

    return {
        increment: function () {
            count++;
            console.log('Count after increment:', count);
        },
        decrement: function () {
            count--;
            console.log('Count after decrement:', count);
        },
        getCount: function () {
            return count;
        }
    };
}

let myCounter = createCounter();

myCounter.increment();  // Output: Count after increment: 1
myCounter.increment();  // Output: Count after increment: 2
myCounter.decrement();  // Output: Count after decrement: 1

console.log(myCounter.getCount());  // Output: 1


/* 

Breakdown:
! 1)createCounter() function:

* This function creates a local variable count, which acts as a private variable.
* It returns an object with three methods: increment, decrement, and getCount.
! 2)Private variable:

*The variable count is only accessible inside the returned methods.
* You cannot directly modify or access count from outside the function. This simulates data encapsulation or private state.
! 3) Closure:

*Each method (increment, decrement, getCount) forms a closure, preserving access to the count variable even after createCounter() has finished executing.
*/

/* 
Step 6: Closures with SetTimeout Example
Another practical example of closures is when using asynchronous code with setTimeout. Closures ensure that variables maintain their values over time.
*/

function delayedGreeter(name) {
    setTimeout(function() {
        console.log("Hello, " + name);
    }, 1000);
}

// delayedGreeter("Alice");  // After 1 second: Output: Hello, Alice
/* 
! 1) delayedGreeter(name):
This function takes a name parameter and uses setTimeout to delay the greeting by 1 second.
! 2)Closure with setTimeout:
*Even though the outer function delayedGreeter() finishes almost immediately, the anonymous function inside setTimeout forms a closure that "remembers" the value of name (Alice), and uses it when the timeout is complete.

*This is particularly useful in real-world scenarios involving asynchronous operations like API calls or event handling, where closures help retain state and context.
*/

/* 
Step 7: Real-World Use Cases of Closures
1. Data Encapsulation and Private Variables:
Closures allow the creation of private variables and methods, as seen in the counter example above. This helps in encapsulating functionality and protecting variables from being modified directly.

2. Maintaining State in Asynchronous Code:
In real-world applications, closures are used extensively with asynchronous code (e.g., promises, setTimeout, event listeners) to retain access to the correct values when the async task completes.
3. Function Factories:
You can use closures to create function factories that generate different versions of a function with customized behavior.


*/

function createGreeting(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    };
}

let sayHello = createGreeting("Hello");
let sayHi = createGreeting("Hi");

sayHello("Alice");  // Output: Hello, Alice
sayHi("Bob");       // Output: Hi, Bob

/* 

In this example, sayHello and sayHi are closures that remember the greeting passed to createGreeting() and customize the message accordingly.


*/


/*

? Complex Example of Closures in JavaScript
Let's go through a more advanced example of closures in JavaScript to illustrate their power in handling state, encapsulation, and asynchronous behavior.

*Scenario: A User Authentication System with Permissions
We want to create a user authentication system that stores a user’s details (username and password) and assigns them different permissions (like admin, user, guest). This system will allow users to log in and check their permissions, all while keeping their details private.
*/




/* 
Step 1: Design
We'll create a function called createUser that stores the user's details (username, password, and role) inside a closure, making those details private. This function will return methods to:
1) Log in by verifying the username and password.
2) Check permissions based on the user's role.
2) Update role if the user is an admin.
*/

// Step 2: Implementation
function createUser(username, password, role = "guest") {
    // Private variables (closure)
    let currentUser = username;
    let currentPassword = password;
    let currentRole = role;

    // Return an object with methods to interact with the user data
    return {
        // Method to log in, checks the username and password
        login: function (inputUsername, inputPassword) {
            if (inputUsername === currentUser && inputPassword === currentPassword) {
                console.log(`Login successful! Welcome, ${currentUser}.`);
                return true;
            } else {
                console.log("Login failed. Invalid credentials.");
                return false;
            }
        },

        // Method to check user role permissions
        checkPermissions: function () {
            if (currentRole === "admin") {
                console.log("You have admin permissions.");
            } else if (currentRole === "user") {
                console.log("You have user permissions.");
            } else {
                console.log("You have guest permissions.");
            }
        },

        // Method to update role (only available to admins)
        updateRole: function (newRole) {
            if (currentRole === "admin") {
                currentRole = newRole;
                console.log(`Role updated to ${newRole}.`);
            } else {
                console.log("Permission denied. Only admins can update roles.");
            }
        }
    };
}

// Creating users
const adminUser = createUser("admin", "adminpass", "admin");
const regularUser = createUser("user1", "userpass", "user");

// Admin logs in and checks permissions
if (adminUser.login("admin", "adminpass")) {
    adminUser.checkPermissions();  // Output: You have admin permissions.
    adminUser.updateRole("superadmin");  // Output: Role updated to superadmin.
}

// Regular user logs in and checks permissions
if (regularUser.login("user1", "userpass")) {
    regularUser.checkPermissions();  // Output: You have user permissions.
    regularUser.updateRole("guest");  // Output: Permission denied. Only admins can update roles.
}

    


/* 
Step 3: Breakdown of the Code
* Private State (Closure):
The variables currentUser, currentPassword, and currentRole are stored inside the createUser function. These variables are private because they are not accessible outside the function, but they are "remembered" by the inner methods returned in the object. This is the essence of the closure.
* Login Method:
The login method checks the provided username and password against the private variables. If they match, it returns true, allowing the user to access other methods (like checking permissions or updating the role).
* Check Permissions:
The checkPermissions method checks the user’s role and logs the appropriate message.
* Update Role:
The updateRole method is only accessible to users with the "admin" role. This method changes the user’s role but only if the current user is an admin.

*/







/* 
Step 4: Why This Example is Complex
* Encapsulation:
The user details (username, password, role) are private. This is an important feature in real-world applications where you don’t want to expose sensitive information, like passwords, to the global scope.
* Conditional Logic in Closures:
Each method inside the returned object (login, checkPermissions, updateRole) forms a closure that has access to the private variables. The logic in each method depends on these variables, but those variables are not accessible from the outside.
* Role-based Access Control:
The example implements a simple form of role-based access control (RBAC), where only users with the "admin" role can update other users' roles. This kind of control is essential for any user management system and shows how closures can manage state and conditional logic effectively.
*/


/* 
Step 5: Real-World Scenario
In real-world applications, closures can be used in many places like:

* Authentication systems: Closures can be used to securely manage user credentials, sessions, or tokens.
* Permission systems: As shown in this example, closures are useful for role-based access systems, encapsulating user permissions.
* API rate-limiting: Closures can store the state of how many requests a user has made and enforce limits (like allowing only 10 API calls per minute).
*/


function createUser2(username,password,role="guest"){
    let currentUser=username;
    let currentPassword=password;
    let currentRole=role;
return {
    login:function(inputUsername,inputPassword,callback){
        setTimeout(() => {
            if(inputUsername===currentUser && inputPassword===currentPassword){
                console.log(`Login successful! Welcome, ${currentUser}.`);
                callback(true);
            }else {
                console.log("Login failed. Invalid credentials.");
                callback(false);
            }
        }, 1000);
    },
    checkPermissions: function () {
if(currentRole==="admin"){
    console.log("You have admin permissions.");
}else if (currentRole === "user") {
    console.log("You have user permissions.");
    return "You have user permissions."
} else {
    console.log("You have guest permissions.");
    return "You have guest permissions."
}
    },
}



}


const asyncUser=createUser2("asyncUser", "pass123", "user")

asyncUser.login("asyncUser", "pass123", function(isLogedin){
    if(isLogedin){
        asyncUser.checkPermissions()
    }
    
})








/* 

In this example:

*The login method simulates an asynchronous operation (e.g., fetching data from a server) using setTimeout.
*Even though the outer createUser function has already finished executing, the callback function inside setTimeout still remembers the currentUser and currentPassword variables due to closures.
*/




/* 

Step 7: Conclusion
Closures in JavaScript can be as simple or as complex as you need them to be. They allow functions to have persistent memory of variables from their outer scope, which can be used to manage state, encapsulate data, and handle asynchronous behavior. In real-world applications, closures are often used for user authentication, permissions, API rate-limiting, and more.







*/




/* 
Step 8: Conclusion
Closures are a powerful and flexible feature in JavaScript, allowing functions to "remember" the environment in which they were created. By understanding closures, you can:

*Create private variables and encapsulate data.
*Maintain state in asynchronous operations.
*Build function factories that generate customized functions.
*Closures are at the heart of JavaScript's functional programming capabilities and enable many advanced techniques used in modern JavaScript development.
*/