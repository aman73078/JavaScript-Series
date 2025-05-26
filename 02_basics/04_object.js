// singleton object
// Note:- when we create an object from constructor then that object will be singleton.
const userInfo = new Object();
userInfo.id = 'ABC1';
userInfo.name = 'Rahul';
userInfo.age = 32;
console.log(`Line::01-----> ${JSON.stringify(userInfo)}`);

console.log(`Line::01::A-----> ${JSON.stringify(userInfo)}`);

const address = {
    cityName: 'Lucknow',
    country: 'India',
    pincode:'383923',
    touristPlace: {
        hazratganj: {
            place1: 'Rumi Darwaza',
            pace2: 'Bara Imambara'
        },
    },
};

// Object.assign() :- The Object.assign() is a static method which copies all enumerable own
//                      properties from one or more source objects to a target object. It returns 
//                      the modified target Object.

const obj1 = {
    key1: 'value1',
    key2: 'value2',
};

const obj2 = {
    key3: 'value3',
    key4: 'value4',
};

const obj3 = {
    key5: 'value5',
    key6: 'value6',
};

let newUser = Object.assign({},obj1,obj2,obj3);
console.log(`Line::03-----> ${JSON.stringify(newUser)}`);

// Object.keys() :- It returns an array which contains the keys of an object.
console.log(`Line::04----> ${JSON.stringify(Object.keys(newUser))}`);

// Object.values() :- It returns an array which contains the values of an object.
console.log(`Line::05----> ${JSON.stringify(Object.values(newUser))}`);

// Object.entries() :- It returns an array of a given object's own enumerable string-keyed property
//                      [key, value] pairs.
console.log(`Line::05----> ${JSON.stringify(Object.entries(newUser))}`);

// It returns boolean value if the property exist in the given object.
console.log(`Line::06----> ${newUser.hasOwnProperty('isLogged')}`);

// Destructuring
const myObject = {
    name:'Rahul',
    email:'rahul@gmail.com',
    courseInstructur:'Ravi'
};
const {courseInstructur} = myObject;
console.log(`Line::07----> ${courseInstructur}`);

const {courseInstructur:instructor} = myObject;
console.log(`Line::08----> ${instructor}`);

const {name,email:gmail,courseInstructur:mentor} = myObject;
console.log(`Line::09----> ${name}, ${gmail} & ${mentor}`);

/* JSON API :- A JSON API typically refers to an API (Application Programming Interface) that  
                communicates using JSON (JavaScript Object Notation) as the data format. It enables systems (like web clients and servers) to exchange structured data in a lightweight, readable way. */

{
    result:[
        {
            "id":1,
            "name":'rahul', 
            "email":"rahul@gmail.com", 
            "password":"rahul@1234"
        },
        {
            "id":2, 
            "name":'kishor', 
            "email":"kishor@gmail.com", 
            "password":"kishor@1234"
        },
        {
            "id":3, 
            "name":'manoj',
            "email":"manoj@gmail.com", 
            "password":"manoj@1234"
        },
        {
            "id":4, 
            "name":'rubi', 
            "email":"rubi@gmail.com", 
            "password":"rubi@1234"
        },
        {
            "id":5, 
            "name":'sonia',
            "email":"sonia@gmail.com", 
            "password":"sonia@1234"
        },
    ]
}