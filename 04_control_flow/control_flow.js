// ********************************* Controll Flow / Logic Flow *************************************
let num = 10
if(num < 0){
    console.log('Number is less than 0');
}else if(num === 10){
    console.log('Number is equal to 10');
}else{
    console.log('Number is greater than 10');
};

// comparision operator :-  <, >, <=, >=, ==, !=, ===, !==

if(2===2) console.log('Yes this is true.');  // Implicit code

if(4>2) console.log('Yes this is true'),
        console.log('both values are number.');    // We can write but this is not a right way because this does 
                                                   // not seem readable and maintable.


let month = 3;
switch(month){
    case 1:
        console.log('Jan');
        break;
    case 2:
        console.log('Fab');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    default:
        console.log('Not matched');
        break;
};

let day = 3;
switch(day){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        // break;  
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    default:
        console.log('Saturday');
        break;
}
// Note:- If a case matches but there is no break statement, the code will continue executing the subsequent case
//          blocks (this is called "fall-through") until it encounters a break or reaches the end of the switch.

// Falsy Values :- false, '', 0, -0, null, undefined, BigInt 0n, NaN

// truethy values :- "0", 1, "false", " ", [], {}, function(){}

let myArray = [];
if(myArray.length === 0){
    console.log('this is an empty array');
}else{
    console.log('Not empty array');
}

let myObj = {};
if(Object.keys(myObj).length === 0){
    console.log('Object is empty.');
}else{
    console.log('Object is not empty.');
};

// some comparisions
console.log(`Line::01-----> ${false == 0}`);
console.log(`Line::02-----> ${false == ""}`);
console.log(`Line::03-----> ${0 == ""}`);

// Logical Operator:- &&, ||

// Nullish Coalescing Operator (??) :- It check only for null or undefined if any one finds then it will return  
//                                     the second value which mentioned after '??'. 
let firstName;
fullName = firstName ?? 'There is no First Name.';
console.log(`Line::04-----> ${fullName}`);

let lastName = 'kumar';
lastName = lastName ?? 'There is no Last Name.';
console.log(`Line::05-----> ${lastName}`);

let age;
age = null ?? 10;
console.log(`Line::06----> ${age}`);

let email;
email = undefined ?? 'No email.';
console.log(`Line::07----> ${email}`);

// Terniary Operator:- It behaves like if else but the write way is different

let luckNum = 9;
let luckyDay = luckNum=== 9 ? 'Luck day is 9' : 'No lucky day.';
console.log(`Line::08----> ${luckyDay}`);