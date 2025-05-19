// There are two types of memory for declaring a variables.
//    1. Stack :- We use stack for declaring the primitive data Types variables. It will create a copy
//                of the variables in the stack.
//            Example:-
                    let name = "rahul";
                    let newName = name;
                    console.log(`Line::1-----> ${name} & ${newName}`);
                    newName = 'Kishor';
                    console.log(`Line::2-----> ${name} & ${newName}`);

//     2. Heap :- We use heap for declaring the non-primitive data types variables. It will create a
//                reference of the variables in the heap.
//            Example:-
                    let userOne = {
                        email: 'rahul@gmail.com',
                        password: 'rahul1234'
                    }
                    let userTwo = userOne;
                    console.log(`Line::2----> ${JSON.stringify(userOne)} & ${JSON.stringify(userTwo)}`);
                    userTwo.email = "kishor@gmail.com";
                    console.log(`Line::3----> ${JSON.stringify(userOne)} & ${JSON.stringify(userTwo)}`);

/*  Stack: Primitive values are copied (changing newName doesn't affect name).
    Heap: Objects are referenced (changing userTwo.email also affects userOne.email because both point
          to the same object in memory). 
*/