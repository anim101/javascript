/* In JavaScript, functions are one of the most important building blocks. A function is a reusable block of code that can take inputs (parameters), perform a task, and optionally return a value. Let’s go through defining functions in JavaScript in-depth, discussing their syntax, types, and key concepts. */
/* 
* Defining Functions in JavaScript
todo --In JavaScript, functions can be defined in multiple ways. Here are the main methods:

* Function Declaration
* Function Expression
* Arrow Function (ES6)
* Anonymous Functions
* Immediately Invoked Function Expression (IIFE)
*/
// 1. Function Declaration
/* 
todo A function declaration is the most basic way to define a function. The syntax starts with the function keyword, followed by the function name, parameters in parentheses, and a block of code enclosed in curly braces {}. 
*/
let parameter1=20;
let parameter2=30;
function exampleFn(parameter1, parameter2,/* .....more parameter */){
        // Function body or code to be executed
return parameter1 + parameter2
}
console.log(exampleFn(20,30));//result 50

function exampleFn2(name){
    console.log(`hey ,${name}`);/* output--hey,Jhon Doe */
    
}
exampleFn2("Jhon Doe");

// explain exampleFn2 function
/* 
* Function Name: exampleFn2 is the function name.
* Parameters: name is the parameter passed to the function.
* Body: The function body is the code inside {}. In this case, it logs a exampleFn2 to the console.
* Return: This function does not return a value; it just logs to the console. Functions can optionally return a value using the return keyword.
*/
/* 
todo 2. Function Expression
* A function expression allows you to define a function as part of an expression (usually assigned to a variable). Unlike function declarations, function expressions are not hoisted,meaning they are only available after the line of code where they are defined.
*/

const functionName = function(parameter1, parameter2) {
    // Function body
    return parameter1 + parameter2;
};

const functionName2 = function(name) {
    console.log("Hello, " + name);
};

functionName2("something");
/* 
todo --In this case, functionName2 is a variable that holds the function. Function expressions are useful when you want to create functions on the fly or pass functions as arguments to other functions.

*/


/* 
todo 3. Arrow Functions (ES6)
* Introduced in ES6 (ECMAScript 2015), arrow functions provide a shorter syntax for writing function expressions. They also have a different behavior for handling the this keyword, which makes them especially useful in certain situations like callbacks.
 */
const greet1 = (parameter1, parameter2) => {
    // Function body
    return parameter1 + parameter2;
}


const greet = (name) => {
    console.log("Hello, " + name);
};

greet("Charlie"); 
/* 
* If the function body has only one statement, you can omit the {} and return keyword. The return is implicit.

*/

const greet2 = (name) => console.log("Hello, " + name);

greet("Dana"); // Output: Hello, Dana
/* 
Arrow functions are especially useful for short, concise function definitions and when you want to avoid using this in a complex way.


*/

/* 
todo -- 4. Anonymous Functions
* An anonymous function is a function that has no name. It’s typically used in situations where a function is needed temporarily or passed as an argument to another function (like event handlers or callbacks).

 */

/* setTimeout(function(){
    console.log("This runs after 2 seconds");

},2000) */

/* 
In this example, the function passed to setTimeout is an anonymous function because it has no name.


*/

/* 

todo --5. Immediately Invoked Function Expression (IIFE)
An Immediately Invoked Function Expression (IIFE) is a function that is defined and immediately executed. IIFEs are often used to create a private scope for variables, avoiding pollution of the global namespace.


*/

(function() {
     // Code executed immediately
    console.log("This function runs immediately");
})();

/*=============================================
=    Key Concepts of Functions in JavaScript            =
=============================================*/



/* 
todo Parameters vs. Arguments
* Parameters: These are placeholders in the function definition.
* Arguments: These are actual values passed when calling the function.
*/

function sum(a, b) { // 'a' and 'b' are parameters
    return a + b;
}

sum(2, 3); // '2' and '3' are arguments


/*
 todo Return Statement

* The return statement is used to return a value from a function. When a function reaches a return, it immediately stops executing and returns the specified value.
If no return is specified, the function returns undefined by default.
 */

function add(a, b) {
    return a + b; // returns the sum of a and b
}

let result = add(4, 5);
console.log(result); // Output: 9


/* 
todo Default Parameters (ES6)

* In ES6, you can define default values for function parameters, so if no argument is passed, the default value is used.
*/

function greet4(name = "Guest") {
    console.log("Hello, " + name);
}

greet4(); // Output: Hello, Guest




/*  
todo Rest Parameters

* In JavaScript, rest parameters allow a function to accept an indefinite number of arguments as an array. Rest parameters are introduced in ES6 (ECMAScript 2015) and make it easier to work with functions that can take varying numbers of arguments.
*/

/* 
todo Syntax of Rest Parameters
The rest parameter syntax looks like this: ... followed by a parameter name. The parameter collects all remaining (or "rest") arguments passed to the function and puts them into an array.
*/

/* 
function functionName(...restParameter) {
    // function body
}

*/

/* 

* The rest parameter must always be the last parameter in the function definition.
* The function can have normal parameters before the rest parameter.
* Only one rest parameter is allowed per function definition.

*/

/* 
todo Example of Rest Parameters
* Here's an example of how to use rest parameters in a function that calculates the sum of all the numbers passed to it:
*/

function sum5(...number){
    return  number.reduce((total,num)=>total +num,0)

}

console.log(sum5(1,2,3,4));
console.log(sum5(10,30,50));

/* 
* In this case, the rest parameter ...numbers collects all the arguments passed to the sum function into an array.
* The reduce method is used to sum all the values in the numbers array.

*/

/* 

todo How Rest Parameters Work
1) Captures Extra Arguments: Rest parameters capture all arguments after the last named parameter into an array.
2) Can Have Other Named Parameters: You can mix rest parameters with regular parameters, but the rest parameter must always be the last one.
*/

function introduce(fristName,lastName,...titles){
    console.log(`Name :${fristName} ${lastName}`);
    console.log(`Title: ${titles}`);
    
    
}

introduce("Jhon","Doe","Mr","PHD","Engineer")
/*
In this example, firstName and lastName are normal parameters, while titles is the rest parameter. It captures all the remaining arguments after the first two.

*/


/* 

Differences Between Rest Parameters and Arguments Object
Before ES6, the arguments object was used to access all arguments passed to a function. However, there are significant differences between rest parameters and the arguments object:

* 1. Rest Parameters are an Array:
The rest parameter is an actual array, so you can directly apply array methods like map(), filter(), reduce(), etc.
The arguments object is array-like (has a length property and can be accessed using indices), but it's not a true array, so you cannot use array methods directly.
* 2. Clarity:

Rest parameters are explicit in the function signature (...params), making it clear that the function can accept multiple arguments.
The arguments object is implicit and less readable in some cases.
* 3. Works Only with Remaining Parameters:

Rest parameters capture only the arguments not already matched by named parameters. The arguments object, on the other hand, captures all arguments passed to the function.

*/

function demoRest(a, b, ...restParams) {
    console.log(restParams);  
    // Array of additional arguments
}

demoRest(2,2,10,20,20)/* [ 10, 20, 20 ] */

function demoArguments(a, b) {
    console.log(arguments); 
     // Arguments object
}
demoArguments(10,2,4,4)/* [Arguments] { '0': 10, '1': 2, '2': 4, '3': 4 } */

/* 

Use Cases for Rest Parameters
Rest parameters are helpful in the following scenarios:

Variable Number of Arguments:

When a function can accept any number of arguments, such as a sum function or a concat function.
*/

function sum6(...num){
    return num.reduce((acc,num)=>acc+num,0)
}
console.log(sum6(10,20,30));


/* Handling Optional Arguments:

When you want to provide additional arguments to a function after some fixed ones. */

function greetFn(message,...name){
  return  name.forEach(name=>console.log(`${message}${name}!`)
    )
}

greetFn("Hey,","Tanvir","Shubro","Siku")

/* 
Avoiding arguments Object:

When you want to avoid using the arguments object for clarity, rest parameters offer a cleaner, more modern approach.

*/

/* 
todo Conclusion
Rest parameters in JavaScript are a powerful feature that allows functions to accept a variable number of arguments as an array. They provide a cleaner and more flexible alternative to the arguments object, making your functions more readable and efficient. Rest parameters are commonly used in situations where you need to handle a dynamic number of inputs or when defining flexible, reusable code.
*/

