
/*=============================================
=              Lexical Scoping           =
=============================================*/

/* 
* Lexical Scoping in JavaScript is the process by which the scope of variables is determined based on their position in the source code. When a function is defined, JavaScript determines the scope of the variables based on where the function is declared, not where it is called. This is what we mean by lexical or static scoping.

? In simpler terms:

* Lexical scope means that a function can access variables that are declared in its own scope as well as in its parent (outer) scopes.
* This scope is defined at the time the function is written, not when it is executed.

*/

/* 
Step-by-Step Explanation of Lexical Scoping
Step 1: Understanding Scopes
* Global Scope: Variables defined outside any function or block are available throughout the code, including inside functions.
* Function Scope: Variables defined inside a function are available only inside that function.
* Lexical Scope: When a function is defined, it has access to its own scope and any outer scopes in which it was defined.
*/

/* 

* Step 2:  How Lexical Scoping Works
In JavaScript, functions are lexically scoped, which means that inner functions can access variables from their outer (parent) scope, where they were defined. The inner function "remembers" the environment in which it was created, even if the function is called in a different scope.

Here’s how it works:

* A function has access to:
1) Its own scope (variables declared inside it).
T2)he scope of the parent function in which it was defined.
3) The global scope (if applicable).

*/

/* 
Step 3: Lexical Scoping Example
Let’s break this down with a step-by-step example.
*/

let globalVar = "I am a global variable";

function outerFunction() {
    let outerVar = "I am an outer variable";

    function innerFunction() {
        let innerVar = "I am an inner variable";
        console.log(globalVar);
        // Accesses global variable
        console.log(outerVar);
        // Accesses outer function's variable
        console.log(innerVar);
        // Accesses its own variable
    }

    innerFunction();
    // Calling the inner function
}

outerFunction();
/* 
? Breakdown:
* Global Scope:
 globalVar is declared in the global scope. It can be accessed from anywhere, including from inside functions.
* Outer Function:
outerVar is declared inside outerFunction(). It can be accessed only inside outerFunction() and by any inner functions defined within it.
* Inner Function:
---innerVar is declared inside innerFunction(). It can be accessed only inside innerFunction().
---innerFunction() has access to:
    -[Its own variable (innerVar).
    -[The outerVar declared in the outerFunction() (because it is lexically inside outerFunction()).
    -[The globalVar from the global scope.

*/

/* 

Step 4: Lexical Scoping at Work (Real-world-like Example)
Let’s consider a real-world scenario. You might want to create a counter where you increment the count each time a function is called. Lexical scoping helps keep track of the count across multiple calls to the function, even though the variable isn't in the global scope.
*/

// Example: Creating a Counter with Lexical Scope

function counter() {
    let count = 0;  // 'count' is in the lexical scope of 'increment' function

    return function increment() {
        count++;  // Increments the count variable in the outer scope
        console.log(count);
    };
}

let myCounter = counter();  // Returns the 'increment' function

myCounter();  // Output: 1
myCounter();  // Output: 2
myCounter();  // Output: 3

/* 
Breakdown:
* 1) counter() function:

count is declared inside counter(), so it’s local to that function.
However, increment() is defined inside counter(), which means it has lexical access to count, even though count is not defined inside increment().
* 2) increment() function:

Each time myCounter() is called, it increments the count variable. Even though counter() has finished executing, increment() still remembers the value of count because of lexical scoping.
* 3) Function Closure:

When counter() is called, it returns the increment() function. This function forms a closure, meaning it "closes over" the variables it needs from its parent scope (in this case, count).
Each time myCounter() is called, it updates and logs the value of count.
This pattern is often used for data privacy or state management where we need to track variables over time without exposing them to the global scope.
*/

/* 

Step 5: Lexical Environment (Behind the Scenes)
Behind the scenes, JavaScript uses something called a lexical environment to manage scoping. The lexical environment contains:

* Environment Record: Stores variable declarations, function declarations, and values for the current scope.
* Reference to Outer Environment: A link to the parent lexical environment, which enables the inner function to access variables from its parent scope.
* When a function is invoked, JavaScript checks the following:

1) Does the variable exist in the local scope (inside the function)?
2) If not, does it exist in the parent scope?
3) If not, does it exist in the global scope?
*/

/* 
Step 6: Lexical Scoping in a Nested Function Chain
Lexical scoping is particularly useful when you have a chain of nested functions. Each function has access to its own scope and any outer scopes, but not to scopes of inner functions.
*/

function grandparent() {
    let grandparentVar = "I am the grandparent";
    
    function parent() {
        let parentVar = "I am the parent";
        
        function child() {
            let childVar = "I am the child";
            console.log(grandparentVar);  // Can access grandparent's variable
            console.log(parentVar);       // Can access parent's variable
            console.log(childVar);        // Can access its own variable
        }
        
        child();
    }
    
    parent();
}

grandparent();
/* 

Breakdown:
* The child() function has access to childVar, parentVar, and grandparentVar because they are part of its lexical chain.
* The parent() function can access parentVar and grandparentVar but not childVar because childVar is inside the child() function.
* This nested chain ensures that variables from outer scopes are available to inner functions, but not vice versa.
*/

/* 

Why Lexical Scoping is Important
1) Access to Outer Variables: Functions can access variables from their parent scope, which makes it easier to create more complex, layered logic.

2) Closures: Lexical scoping enables closures, one of the most powerful features in JavaScript. Closures allow a function to "remember" its outer scope variables, even after the parent function has finished execution.

3) Modularity: By using lexical scoping, you can limit variable access, ensuring that variables are only available where needed. This leads to better data encapsulation and modular code.

4) Predictability: Lexical scoping is static. The scope of a variable is determined when the function is written, not when it is called. This predictability makes it easier to reason about the code.


*/

/* 

* Conclusion
Lexical scoping is a fundamental concept in JavaScript that defines how variables are scoped and accessed based on where they are declared in the code. It enables inner functions to access variables from their parent scopes, which is particularly useful for building closures, maintaining state, and organizing code in a modular way. Understanding lexical scoping helps in writing more predictable, maintainable, and reusable JavaScript code.
*/