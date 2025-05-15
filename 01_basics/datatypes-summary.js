/* Note:-> Based on data stores in memory or access data from memory there are two types of Data Type
1. Primitive Data Type -> Predefined data types or built-in Data Types which is provided by JavaScript
                          Programming language are known as Primitive Data Types. All Primitive Data 
                          Types call by value. Suppose we copy value of a variable then address won't be
                          copied but value will be copied. 
                          For example: Number, String, Boolean, Null, Undefined, Symbol, BigInt.

2.  Reference (Non Primitive) Data Type ->  Data Type that derived from Primitive Data Type are known as
                                            Reference Data Type.
                                            For example: Array, Object, Date, Function.


Note:- JavaScript is a dynamically typed language means Variable types are determined at runtime not at
        compile time. So, we don't need to declare the type of a variable when you create it.
             For example: 
             let x = 10; // Here x is a Number type variable
                x = "hello";
*/
// Symbol() -> It is a primitive data type in JavaScript. It is used to create a unique symbol value.
                let id = Symbol("1234");
                let anotherId = Symbol("1234");
                console.log(`Line::1------- ${id===anotherId}`); // false

// BigInt -> It is a primitive data type in JavaScript. It is used to represent a whole number that 
//            is too large or too small to be represented by the Number data type.
             let num = 99999999999999999999999999999999999n;
             console.log(`Line::2-------- ${typeof num} and ${num}`);
