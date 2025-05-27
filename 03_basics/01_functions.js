// Q.  What are the function?
// Ans. Functions are the resuable blocks of code designed to perform the specific task. They allow us to organize
//      reuse and modularize code. It can take input, perform actions and return output.

    // Types of functions
    // 1. Function Declarition/Statement -> This is the most common way to define the function. It starts with
    //    function keyword, followed by function name, parentheses for parameters, curly braces for function body.

        function hello(){
            console.log(`Hello Frieds, This is function declarition/statement.\n`);
        };
        hello();

    // 2. Function expression -> Function expression defines a function inside an expression. This can be anonymous
    //    or named.
        // a. Anonymous function expression -> A function without name is known as anonymous function.

            const printRahulAge = function(){
                console.log(`Rahul age is 32.`);
            }

            printRahulAge();

        // b. Named function expression -> A function with name, usefull for recursion or debugging.
            const printRahulBloodGroup = function bloodGroup(){
                console.log(`Rahul blood group is +B\n`);
            }
            printRahulBloodGroup();

    // 3. Arrow function -> Arrow function introduced in ES6, a function provide a concise syntax for writing
    //                      function expression. They don't have their own this context.
        const sum = (a,b) => {
            console.log(`sum of ${a} and ${b} : ${a+b}`);
        }
        sum(5,6);

// Q.2 What are Methods?
// Ans. A function creates inside an object is known as method.
        const details = {
            name:'Aman Tripathi',
            age: function(age){
                console.log(`${this.name} age is ${age}`);
            }
        }
        details.age(22);

// Difference between Parameters and Arguements :- 
// Parameters:
// When we define a function, the variables listed inside the parentheses 
// in the function declaration are called **parameters**.

function greet(name) {
  console.log("Hello, " + name);
  // 'name' is a parameter
}

// Arguments:
// When we call the function and pass values to it, those values are called **arguments**.

greet("Alice");  
// "Alice" is an argument passed to the 'greet' function


/*   Difference between Rest Operator and Spread Operator
        Both Rest and Spread use the ... (three dots) syntax. But their purpose and where you use them make all the difference.  
        
Rest Operator
    Used in function parameters
    Collects all remaining arguments into a single array

Spread Operator
    Used in arrays, objects, or function calls
    Spreads elements of an array or object out
*/

function printValues (...values) {      
    console.log('Printed values------> ',values);
};
printValues(200,300,400,500);