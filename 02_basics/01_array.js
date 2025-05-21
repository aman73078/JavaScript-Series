/* 
Q.1 What is an Array?
Ans.    An Array in JavaScript is an Object which is used to store the multiple values in a single variable. These
        values can be- string, boolean, number, object, other array etc.

Q.2 What are Shallow copy and Deep copy?
Ans.    In JavaScript Shallow copy and Deep copy are the techniques to create a copy of objects or arrays.
        Shallow copy:- A Shallow copy is a copy of an Object whose properties share the same reference.
        Deep copy:- A Deep copy is a copy of an Object whose properties do not share the same reference.
*/
const Arr = ['Ravi','Kishor','Mahesh','Dheeru'];
console.log(`Line::1------> ${Arr}`);
Arr.push('Rahul')
console.log(`Line::2------> ${Arr}`);
Arr.pop()
console.log(`Line::3------> ${Arr}`);
Arr.unshift(3)
console.log(`Line::4------> ${Arr}`);
Arr.shift()
console.log(`Line::5------> ${Arr}`);
console.log(`Line::6------> ${Arr.includes('Kishor')}`);
console.log(`Line::7------> ${Arr.indexOf('Kishor')}`);
let newArr = Arr.join();
console.log(`Line::8------> ${typeof newArr} & ${newArr}`);

// Difference between slice and splice

// .slice(startIndex, endIndex) :-> 
//   - Used to extract a portion of an array.
//   - It does NOT modify (mutate) the original array.
//   - Returns a new array containing the selected elements.
console.log(`Use of slice : ${Arr.slice(0,3)} & Original Array : ${JSON.stringify(Arr)}`);

// .splice(startIndex, deleteCount) :-> 
//   - Used to add or remove elements from an array.
//   - It DOES modify (mutate) the original array.
//   - Returns an array of the removed elements.
let Arrn2 = [3,4,7,88,93,2];
console.log(`Use of splice : ${Arrn2.splice(0,3)} & Original Array : ${JSON.stringify(Arrn2)}`);