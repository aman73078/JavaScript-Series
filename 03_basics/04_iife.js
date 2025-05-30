/* Immediately Invoked Function Expression (IIFE) :- 
    IIFE is a function that is defined and called immediately. It is used to create a scope for the 
    variables
    There are two reasons to use IIFE:
    1. To prevent global variables:- Suppose we created a variable in a script and we don't want it
                                     to be accessed globally. We can use IIFE to create a local scope 
                                     for that variable. If we don't use IIFE, then global variable can
                                     polute our function and can cause unexpected behavior.
    2.  Immediately called: Suppose we created a function that contains our database connection code.
                            and we want to call it immediately. We can use IIFE to call it immediately.
 */

// Syntax:- ()()  
// In first paranthesis we define the function and in second paranthesis we call it.

( function(){
    console.log("Hello, World!");
})();

( (name) => {
    console.log(`Hello ${name}, How are you?`);
})('Rahul');

// Note:- After defining the function we have to add a semicolon at the end of the function. Otherwise
//        it will throw an error.