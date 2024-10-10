
/*=============================================
=      Function Stack in JavaScript            =
=============================================*/

/* 
Scope and the Function Stack in JavaScript: Step-by-Step Explanation
Understanding scope and the function stack is crucial to mastering how JavaScript handles variables, memory, and function execution. These two concepts work together to determine where variables are accessible and how functions are executed and tracked in memory.


*/

/* 
Step 1: What is Scope?
Scope refers to the context in which variables and functions are accessible. In JavaScript, there are three primary types of scope:

Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
Function Scope: Variables declared inside a function are only accessible within that function.
Block Scope: Variables declared inside a block (e.g., inside {} in if statements or loops) using let or const are only accessible within that block.

*/

// Example of Scop
let globalVar = "I'm global";

function example() {
    let functionVar = "I'm inside a function";

    if (true) {
        let blockVar = "I'm inside a block";
        console.log(blockVar);  // Output: I'm inside a block
    }

    console.log(functionVar);  // Output: I'm inside a function
    // console.log(blockVar);  // Error: blockVar is not defined
}

example();
console.log(globalVar);  // Output: I'm global
/* 
* globalVar is in the global scope and accessible anywhere.
* functionVar is in the function scope, so it's only accessible inside example().
* blockVar is in the block scope and only accessible within the if block.

*/

/* 
Step 2: What is the Function Stack?
The function stack (also known as the call stack) is a data structure used by JavaScript to keep track of function execution. When a function is invoked, it is pushed onto the top of the call stack. When the function completes, it is popped off the stack.

This process helps JavaScript handle function calls in a last-in, first-out (LIFO) manner. The call stack grows as more functions are called, and shrinks when those functions complete.

* How the Call Stack Works:
-Pushing: When a function is called, it is added to the top of the stack.
-Popping: Once the function finishes executing, it is removed from the top of the stack, and JavaScript returns to the function below it.
*/


/* 
Step 3: How Scope and the Function Stack Work Together
When a function is invoked, the current scope is saved on the stack, and the function creates its own execution context (scope). The stack helps manage function calls, ensuring that JavaScript knows which function is currently running and which variables it has access to based on its scope.
*/

/* 

Step 4: Function Stack and Recursion
Recursion occurs when a function calls itself. Each recursive call creates a new entry on the stack, with its own execution context. If recursion is too deep (i.e., too many functions on the stack), it can cause a stack overflow, leading to errors.
*/

// Example: Scope and Call Stack in Action

function multiply(a, b) {
    return a * b
}

function square(n) {
    return multiply(n, n)
}

function printsquare(x) {
    let result = square(x)
    console.log(result);

}

printsquare(4)

/* 
Breakdown:
1. The global scope has the functions multiply, square, and printSquare declared.
2.The function printSquare(4) is called, so it is pushed onto the call stack.
3.Inside printSquare(), square(4) is called, which pushes square onto the stack.
4.Inside square(), multiply(4, 4) is called, so multiply is pushed onto the stack.
5.multiply returns 16, so it’s popped off the stack.
6.square returns 16, so it’s popped off the stack.
7.printSquare logs 16, and is then popped off the stack.

*/


/* 

Initial Call Stack:
- Global Context

After calling printSquare(4):
- Global Context
- printSquare

After calling square(4):
- Global Context
- printSquare
- square

After calling multiply(4, 4):
- Global Context
- printSquare
- square
- multiply

After returning from multiply:
- Global Context
- printSquare
- square

After returning from square:
- Global Context
- printSquare

After returning from printSquare:
- Global Context

*/

/* 

Step 5: Real-World Example: Form Submission
Let’s consider a real-world example involving a web form that collects user data and submits it to a server. The process of validating the form, submitting the data, and showing a success message would involve multiple function calls that the function stack handles.


*/
/*
  <body>
    <form action="">
      <input type="text" name="name" id="name" placeholder="Enter your name" />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Enter your email"
      />
      <button type="submit" id="btn">submit</button>
    </form>
   
  </body>
*/



const handleSubmit = document.getElementById("btn");

function validateForm(formData) {
    if (!formData.name) {
        throw Error("Name is Required")
    }
    if (!formData.email) {
        throw Error("Email is Required")
    }
};

function submitForm(formData){
    validateForm(formData)
    console.log("From data submited",formData);
    

}


handleSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let fromData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    
    }
    submitForm(fromData)
})

/* 
Flow:
1) handleSubmit: Called when the user clicks the submit button. It prevents the default form behavior and gathers the form data.
2) submitForm: Called by handleSubmit to validate and submit the form data.
3) validateForm: Called by submitForm to ensure the form data is valid.
*Each function is added to the call stack in order, and they work together using scope to access the necessary variables (formData). After each function finishes execution, it is popped off the stack, and control is returned to the calling function.
*/

/* 

Step 6: Conclusion
* Scope and the function stack are fundamental to how JavaScript manages variable access and function execution. Scope controls the visibility of variables, ensuring that functions can access only the variables they are supposed to, while the call stack keeps track of the order in which functions are invoked, allowing JavaScript to execute functions in a predictable manner.

* Scope: Controls variable accessibility.
*Function Stack: Keeps track of function execution, ensuring functions execute in the correct order.
*Together, these concepts allow JavaScript to handle complex program flows, from simple calculations to real-world applications like form submissions or API requests.
*/