// Q.1: What is a Method in JavaScript?
// Ans  In JavaScript, a method is a function that is associated with an object. It is defined as a property of the object and typically operates on the data contained within that object.
//      Example-> 
        let result = {
            num1: 5,
            num2: 6,
            sum: function(){
                console.log(`Sum of ${this.num1} and ${this.num2} : ${this.num1+this.num2}`);
            }
        }
        result.sum();

// Q.2: What is a Built-in Method in JavaScript?

// 1. .map() --> In JavaScript, the .map() method is a built-in function for arrays that creates a new array
//               by applying a provided function to each element of the original array. This method is
//               particularly useful for transforming data in a concise and readable manner.


// 2. .every() --> .every() is an array method of javascript which is used to test whether all elements in
//                  an array pass a specified test.
            // Example:- 
                function func1(list){
                    let result = list.every(n => typeof n > 0);
                    console.log(`.every() : ${result}`);
                }
                func1([1,3,-5,0,33])