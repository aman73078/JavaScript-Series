/*  Q.1 What are Promises ?
    Ans.    The Promise objects represent the eventual completion (or failure) of an asynchronous operation and
            its resulting value.
            A Promise is in one of three states.
            1.  Pending:- Initial state, neither fullfilled nor rejected.
            2.  Fullfilled:- Meaning that the operation was completed successfully.
            3.  Rejected:- Meaning that the operation failed.
*/

// Creating and Consumming Promise

const promiseOne = new Promise((resolve,reject)=>{
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(()=>{
        console.log("Async Task one completed.");
        resolve()  // this will connect to then
    },1000)
});
promiseOne.then(()=>{
    console.log("promiseOne consumed.") // if we don't call resolve() then this console won't execute after calling the resolve() this is print.
});

// we can also write like this
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task two executed.");
        resolve();
    },1000);
}).then(()=>{
    console.log('Promise two consumed.');
});

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Async Task three");
        resolve({username:"rahul",email:"rahul@gmail.com"});
    },1000)
})
promiseThree.then((user) =>{
    console.log("Line::41----> ",user);
})

const promiseFour = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Async Task Four");
        let error = false;
        if(!error){
            resolve({username:"Mohan",email:"Mohan@gmail.com"});
        }else{
            reject("Error : SOMETHING WENT WRONG.");
        };
    },1000);
});
promiseFour.then((user)=>{
    console.log("Line::56---> ",user);
    return user.username;
}).then((username)=>{
    console.log("Line::59----> ",username);
}).catch((error)=>{
    console.log("Line::61----> ",error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected.");
});

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task Five.");
        let error = false;
        if(!error){
            resolve({language:"JavaScript", valid:"December 2026"});
        }else{
            reject("Error : JS went wrong.");
        }
    },1000)
});

promiseFive.then((details) =>{
    console.log("Line::79---> ",details);
    return details.language;
}).then((language)=>{
    console.log("Line::82---> ",language);
}).catch((error) => {
    console.log("Line::84---> ",error);
});

// Using async and await
// Note:- async and await do not handle the error if the promise is resolved then return the response otherwise
//        don't return the error for handling the error we use try...catch

const promiseSix = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({language:"TypeScript", valid:"July 2024"});
        }else{
            reject("Error : TS went wrong.");
        };
    },1000);
});
async function handlePromiseFive() {
    try{
        const details = await promiseSix;
        console.log("Line::104---> ",details);
    }catch(error){
        console.log(`Error :: ${error.message || error}`);
    };
};
handlePromiseFive();


async function getAllUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json();
        console.log("Line::116---> ",data);
    }catch(error){
        console.log(`Error :: ${error.message || error}`);
    };
};
getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json();
}).then((data) => {
    console.log("Line::126----> ",data);
}).catch((error) => {
    console.log("Line::128----> ",error);
});