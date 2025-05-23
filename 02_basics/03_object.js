//  There are two ways to decalre the objects. 
    // 1. singleton ( This create from constructor )
        // Object.create() 
    // 2. literal ( This create from object literal )
    let details = {
        name: 'rahul',
        "full Name":'Rahul Kumar',
        age: 25,
        address:'Hoodi Benguluru 560048',
        hobbies:['cricket','football','reading'],
        email: 'rahul@gmail.com'
    }
    console.log(`Line::1----> ${JSON.stringify(details)}`);
    console.log(`Line::2----> ${details.email}`);  // access the property using dot notation
    console.log(`Line::3----> ${details["full Name"]}`); // access the property using bracket notation

    // Interview question:- Create a Symbol and use it as a key in an object
    let mySym = Symbol("key1");
    let myObject = {
        [mySym]: "value1", // If we create symbol and use it as a key in an object then we have to wrap it in square brackets
        mySym: "value2", // here we are using symbol as a key but we are not wrapping it in square brackets then it will treat as string
    }
    console.log('Line::4----> ',myObject);
    console.log(`Line::5----> ${myObject[mySym]} & ${typeof myObject[mySym]}`); // access the property using bracket notation
    console.log(`Line::6----> ${myObject.mySym} & ${typeof myObject.mySym}`); // access the property using dot notation

    details.email = 'rahulKumar@gmail.com';
    console.log(`Line::7----> ${details.email}`);
    Object.freeze(details); // This will prevent the object from being modified
    details.email = 'rahulKumar@google.com';
    console.log(`Line::8----> ${details.email}`);

    let userData = {
        name: 'Mahesh',
        age: 32,
    }

    userData.greeting = function(){
        return `Hello ${this.name}`;
    };
    userData.greetingTwo = function(){
        return `${this.name}'s age is ${this.age}`;
    };

    console.log("Line::9----> ",userData.greeting);
    console.log(`Line::10----> ${userData.greeting()}`);
    console.log("Line::11----> ",userData.greetingTwo);
    console.log(`Line::12----> ${userData.greetingTwo()}`);