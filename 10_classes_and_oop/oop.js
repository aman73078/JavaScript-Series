// #################### Object Literal #############################
const user = {
    username:'rahul',
    loginCount:8,
    signedIn: true,
    getUserDetails: function(){
        console.log('Get user details from database.');
        console.log(`username: ${this.username}`);
        console.log(this);        // this will return current context
    }
}
console.log(user.getUserDetails());
// Note:- Suppose we want to create the multiple user that time this way is not right


// ############################ Constructor #########################################
function User(username,email,password,age){
    this.username = username;
    this.email = email;
    this.password = password;
    this.age = age;
    // return this;
}
const user1 = User("kishor",'kishor@gmail.com',"kishor1234",32);
const user2 = User("Mohan",'Mohan@gmail.com',"Mohan1234",23);
console.log('Line::26---> ',user1);
console.log('Line::27---> ',user2);

// Note: Here, we are not creating new instance so User properties are overwriting.
// to avoid this we have to ceate a new Instance for each user means for each user a new empty Object will be created constructor function called value assinged to that new instance and return the object


const user3 = new User("Mayank","Mayank@gmail.com","Mayank1234",16);
const user4 = new User("Raju","Raju@gmail.com","Raju1234",16);
console.log("Line::35---> ",user3);
console.log("Line::36---> ",user4);
console.log("Line::37---> ",user4 instanceof User);
console.log("Line::38---> ",user1 instanceof User); 
// conlose no.38 will returnn false because we didn't create a new Instance of User by using "new" keyword.
