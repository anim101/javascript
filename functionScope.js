
/*=============================================
=            JavaScript Function Scope            =
=============================================*/
/* 
JavaScript Function Scope: Step-by-Step Explanation
Scope in programming refers to the context in which variables, functions, and objects are accessible. In JavaScript, there are several types of scopes, but here we will focus on function scope, which refers to variables defined inside a function and their visibility. Understanding function scope is crucial for writing clean, bug-free, and modular code.
*/

/* 
Step 1: What is Function Scope?
Function scope means that variables declared within a function are local to that function and cannot be accessed from outside the function. This is crucial because it creates a level of isolation, preventing external interference with the internal workings of a function.

* Variables defined inside a function are only accessible within that function.
* Variables defined outside a function have global scope and can be accessed from anywhere in the program (unless they are blocked by other scoping mechanisms like block scope).
*/

function example() {
    let localVariable = "I'm local to the function!";
    console.log(localVariable);
    // This works because we're inside the function
}
/* 
console.log(localVariable);

    Error: localVariable is not defined
*/

example()

/* 
In the above example, localVariable is declared inside the example() function, so it is local to the function.
If you try to access localVariable outside of the function, JavaScript will throw an error because the variable does not exist in the global scope.
*/


/* 
Step 2: Why is Function Scope Important?
Function scope is important because it:

Prevents Variable Collisions: If two functions use the same variable name, function scope keeps them independent. Each function’s variables are private to that function, so you avoid unintended modifications.
Encapsulates Logic: Function scope allows you to isolate code into smaller, reusable units (functions). This encapsulation ensures that your variables and logic don’t pollute the global environment.
Enhances Security and Maintainability: By keeping data private within functions, you reduce the risk of external code accidentally modifying sensitive data. This makes your codebase easier to maintain.
*/

/* 
Step 3: Variable Declaration in Function Scope
In JavaScript, variables inside functions are scoped based on how they are declared:

var – Function scoped
let and const – Block scoped (they follow a stricter scoping than var, but still behave similarly inside functions)
*/
// Example using var:

function testVar() {
    var x = 10;
    if (true) {
        var x = 40;// This modifies the same `x` because `var` is function-scoped
        console.log(x);
    }
    console.log(x);

}

testVar()

function testLet(){
    let x=100;
    if(true){
        let x=20;// This is a new variable due to block scoping
        console.log(x);//output 20
        
    }
    console.log(x); // Output: 100 (different variable)
    
}
testLet()
/* 
When using var, the variable is function-scoped, meaning it can be modified from within any block (like an if statement) inside that function.
When using let or const, the variable is block-scoped, meaning it’s scoped only to the block (like the if block) where it's defined, not the whole function.
*/


/* 
todo --Step 4: Global Scope vs. Function Scope
Global Scope: Variables declared outside of functions are in the global scope. They can be accessed by any function in the script, which can lead to unintended behavior if multiple functions modify the same global variable.

todo --Function Scope: 
Variables declared inside a function cannot be accessed outside the function. They are "local" to the function, which makes the function self-contained and free of interference from other code.

*/

let globalVar="I am global";
function demoScope(){
    let localVar="I am local"
    console.log(localVar);
    console.log(globalVar);
    
    
}
demoScope()
console.log(globalVar);
/* console.log(localVar);
 Error: localVar is not defined (it's local to demoScope)
 */


 
 /*=============================================
 =       Step 5: Real-World Example - Why Function Scope Matters            =
 =============================================*/
 
 
 
 /* 
 Step 5: Real-World Example - Why Function Scope Matters.
 Imagine you're building a simple e-commerce site, and you have a function to calculate the total price of items in a shopping cart. Each time a user adds or removes an item, the function updates the total.

Without function scope, you might accidentally expose sensitive variables like the cart’s contents or running total, which can be easily modified by other parts of your code, causing errors.


 */


// Example: Total Price Calculation

let taxRate = 0.08;  // Global variable (can be accessed anywhere)

function calculateTotal(cartItems) {
    let total = 0;  // Local variable, scoped to this function
    for (let item of cartItems) {
        total += item.price;
    }
    
    function applyTax() {
        return total + (total * taxRate);  // Inner function accessing outer scope
    }

    return applyTax();  // Final total with tax applied
}

let cart = [
    { name: "Book", price: 10 },
    { name: "Pen", price: 2 }
];

/* console.log(total);  // Error: total is not defined (total is local to calculateTotal) */

console.log(calculateTotal(cart));

/* 
Here, the variable total is local to the calculateTotal function, so it cannot be accessed or modified from outside. This prevents other parts of your code from inadvertently tampering with it.
The function applyTax has access to variables in the outer function scope (total and taxRate), but these variables are still safe from outside interference.
*/



/*
Step 6: Nested Function Scope (Lexical Scoping)
In JavaScript, functions can be nested inside other functions. The inner function has access to the variables in the outer function’s scope, but the outer function cannot access variables inside the inner function. This is called lexical scoping.
*/

// Example of Lexical Scoping:

function outerFunction() {
    let outerVar = "I'm outside!";
    
    function innerFunction() {
        let innerVar = "I'm inside!";
        console.log(outerVar); 
         // Inner function can access outerVar
    }

    innerFunction();
    /*  console.log(innerVar); 
     Error: innerVar is not defined (it's local to innerFunction)
     */
}

outerFunction();
/* 
The inner function can access outerVar, but the outer function cannot access innerVar.
*/


/* 

todo Conclusion: Why Do We Need Function Scope?
Encapsulation: Function scope helps encapsulate logic and data within functions, making code more modular, reusable, and easier to manage.
Avoid Conflicts: By using function scope, you avoid variable name collisions and keep your global namespace clean.
Maintainability: With function-scoped variables, you ensure that the logic inside a function doesn’t affect or get affected by other parts of the code, reducing bugs.
Security: Sensitive data or temporary values inside a function are hidden from the rest of the program, preventing unintended modification or exposure.
Memory Efficiency: Variables defined inside a function are automatically destroyed once the function execution is complete, helping with memory management.
Function scope is a key concept in JavaScript that contributes to writing maintainable, efficient, and bug-free code.
*/