// for-of loop is using for iterables
let myArray = ['rahul','kishan','sanjay','vinod','manish'];
for(let item of myArray){
    console.log(`User : ${item}`);
};

let myObj = {
    name: 'rahul',
    age: 32,
    email: 'rahul@gmail.com',
};

// for(let item of myObj){
//     console.log(`Obj user details-> ${item}`);    // This will through an error because objects are not iterables
// }

for(let key of Object.keys(myObj)){
    console.log(`Object keys : ${key}`);
};

// Map() Data type :-  The Map() object holds the unique values in the form of key-value pair and remember the
//                     original insertation order of key or value. Any value (both objects and primitive values)
//                     may be used as either a key or a value.

let programmingLanguage = new Map();
programmingLanguage.set('JS','JavaScript');
programmingLanguage.set('TS','TypeScript');
programmingLanguage.set('PY','Python');
programmingLanguage.set('CPP','C++');

for(let item of programmingLanguage){
    console.log(`Item : ${item}`);      // This return an array like:- [key, value]
};

for(let [key,value] of programmingLanguage){
    console.log(`key ---> ${key} : ${value}`);
};


// for-in-loop is using for iterate the key of an object.
let myDetails = {
    firstName : 'Raj',
    lastName : 'Chopra',
    age : 33,
    email : 'raj@gmail.com',
    phoneNo : '3839232383'
};

for(let key in myDetails){
    console.log(`key of myDetails :---> ${key} : ${myDetails[key]}`);
};

for(let i in programmingLanguage){
    console.log(`Programming Language loop : ${i}`);   // It won't return error.
}; 

// <----------------------------- forEach ----------------------------->
let emailList = ['rahul@gmail.com','kishor@gmail.com','raju@gmail.com','ram@gmail.com','vasu@gmail.com','mahi@gmail.com'];

emailList.forEach(function (item) {
    console.log(`Line::61----> ${item}`);
});

emailList.forEach((item) => {
    console.log(`Line::65----> ${item}`);
});

emailList.forEach((item,index,arr) => {
    console.log(`Line::69----> ${item} - ${index} - ${arr}`);
});

emailList.forEach(printItem);

function printItem(item){
    console.log(`Line::75----> ${item}`);
};

// <---------------------------- .filter() -------------------------------->
let data = [
    {id:1, userName:'manish', email:'manish@gmail.com', age: 32, city: 'kanpur'},
    {id:2, userName:'manju', email:'manju@gmail.com', age: 38, city: 'Lucknow'},
    {id:3, userName:'susmita', email:'susmita@gmail.com', age: 42, city: 'Bandra'},
    {id:4, userName:'manohar', email:'manohar@gmail.com', age: 52, city: 'Bengluru'},
    {id:5, userName:'saanu', email:'saanu@gmail.com', age: 30, city: 'Muradabad'},
    {id:6, userName:'manjeet', email:'manjeet@gmail.com', age: 18, city: 'Mujjfarpur'},
    {id:7, userName:'lalitya', email:'lalitya@gmail.com', age: 22, city: 'kanpur'},
    {id:8, userName:'jugnu', email:'jugnu@gmail.com', age: 32, city: 'Bandra'},
    {id:9, userName:'mahi', email:'mahi@gmail.com', age: 32, city: 'Lucknow'},
    {id:10, userName:'suresh', email:'suresh@gmail.com', age: 25, city: 'kanpur'},
    {id:11, userName:'kishor', email:'kishor@gmail.com', age: 35, city: 'Lucknow'},
];

let users = data.filter((item) => {
    return item.id > 4;
});
console.log(`Line::96-----> ${JSON.stringify(users)}\n`);

users = data.filter((user) => user.age > 35);
console.log(`Line::99-----> ${JSON.stringify(users)}\n`);

// <------------------------------ .map() method -------------------------->
let numList = [1,2,3,4,5,6,7,8,9,10];
let newNumList = numList.map((num) => num*10);
console.log(`Line::104------> newNumList : ${newNumList}`);

newNumList = numList
                .map((num) => num*20)
                .map((num) => num+1);
console.log(`Line::109------> newNumList : ${newNumList}`);

newNumList = numList
                .map((num) => num*20)
                .map((num) => num+1)
                .filter((num) => num >= 100);
console.log(`Line::115------> newNumList : ${newNumList}`);


//  <-------------------------- .reduce() method ------------------------------->
// Syntax:- 
            // let arr = [1,2,3,4,5];
            // let initialValue = 0;
            // let result = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

let numList2 = [1,2,3,4,5,6];
let initialValue = 0;
const sum = numList2.reduce((acc,value) => acc + value, initialValue);
console.log(`Line::127 -----> ${sum}`);;

const multiplication = numList2.reduce((acc, currVal) => {
    console.log(`acc : ${acc} & currVal : ${currVal}`);
    return acc * currVal;
}, 1);
console.log(`Line::132-----> ${multiplication}`);