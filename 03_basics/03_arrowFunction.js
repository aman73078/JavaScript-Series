// Q.1 What is this keyword?
// Ans. 'this' keyword in JavaScript programing language is used to refer current context (Object). 
//       It is used to access the properties and methods of current object.
let userOne = {
    name: "John",
    age: 25,
    display: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    },
};
userOne.display() // Output: My name is John and I am 25 years old.
console.log(`Line::01----> ${JSON.stringify(this)}`); 
// Globally, In node environment this will print empty object. In browser environment it will print window object.

function print(){
    console.log('Line::02----> ',this);
};

print();

const print2 = function (){
    console.log('Line::03----> ',this);
};
print2();

// Note:- If we call this keyword inside a Function Declarition/Statement or Function Expression,
//        it will print the global object.
//        If we call this keyword inside an Arrow Function, it will print a empty object.

const print3 = () => {
    console.log('Line::04----> ',this);
}
print3();

function userTwo(){
    let userName = 'rahul';
    console.log('Line::05----> ', this.userName); 
    // Inside function 'this.userName' will return undefined because inside function this keyword refers to global object.
}
userTwo();

const addTwo = (a,b) => {
    return a + b;
}
console.log(`Line::06----> ${addTwo(5,6)}`);

const addTwoNum = (a,b) => a+b; // This is called implicit return ( means in one line )
console.log(`Line::07----> ${addTwoNum(5,7)}`);