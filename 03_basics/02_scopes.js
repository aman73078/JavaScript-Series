// Scopes --->

// This is Global Scope
var a = 10;
let b = 20;
const c = 30;



if(true){                     // Curly-braces define a block scope
    var a = 100;              // That is why we should avoid using var to create a variable
    let b = 200;
    const c = 300;
};
console.log(`Line::01-----> ${a}`);
console.log(`Line::02-----> ${b}`);
console.log(`Line::03-----> ${c}`);

if(true){
    var e = 400;
    let f = 500;
    const g = 600;
    console.log(`Inner::Line::01-----> ${f}`);
    console.log(`Inner::Line::02-----> ${g}`);
};

// Here we can see the value of e is 400 because var is function scope
// console.log(`Line::04-----> ${e}`);  
// console.log(`Line::05-----> ${f}`);  // throw an error because f is not defined in global scope
// console.log(`Line::05-----> ${g}`);  // throw an error because g is not defined in global scope

// Note:- Function Scope means that suppose we declare a variable inside a function then it will be accessible inside that 
//          function only but in above case we are not using any function so it will be accessible globally.

function checkScope(){
    if(true){
        var e = 1000;
        var h = 700;
        let i = 800;
        const j = 900;
        console.log(`Inner::Line::01-----> ${e}`);
    };
};
console.log(`Line::06-----> ${e}`);  // the value of e is 400 
console.log(`Line::07-----> ${h}`);  // throw an error because h is not defined in global scope


