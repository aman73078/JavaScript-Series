let marvelHeros = ['Ironman','Captain America','Thor','Hulk'];
let bollywoodHeros = ['Flying Jat','Krish','Shaktimaan'];

console.log(`Line::1-------> ${JSON.stringify(marvelHeros)} & ${JSON.stringify(bollywoodHeros)}`);

marvelHeros.push(bollywoodHeros);
console.log(`Line::1-------> ${JSON.stringify(marvelHeros)}`);

let actress = ['Priyanka','Madhuri','Dipika'];
let allHeros = bollywoodHeros.concat(actress);
console.log(`Line::3------> ${JSON.stringify(allHeros)}`);

let arr1 = ['rahul','mahesh','kishor'];
let arr2 = ['Krishna','Madhav','Govinda'];
let arr3 = [1,3,5,6];
let arr4 = [{email:'rahul', age:32}];
let arr5 = [[99,88,777]];
let combineAll = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5];
console.log(`Line::4-----> ${JSON.stringify(combineAll)}`);

let arrayInsideArray = [1,2,[3,4], [5,6,[7,8, [9, 10]]]];
let new_array = arrayInsideArray.flat(Infinity);  // here we have to give deapth or we can also give infinity
console.log(`Line::5----> ${JSON.stringify(new_array)}`);

console.log(`Line::6----> ${Array.isArray("hindi")}`);
console.log(`Line::7----> ${Array.isArray([1,2,3,4])}`);
console.log(`Line::8----> ${JSON.stringify(Array.from("maheshbabu"))}`);
console.log(`Line::9----> ${JSON.stringify(Array.from({name:'rahul',age:32}))}`);  
// Note:- .from method convert the iterable value into an array.

let num1 = 100;
let num2 = 200;
let num3 = 300;
let num4 = 400;
console.log(`Line::10----> ${JSON.stringify(Array.of(num1,num2,num3,num4))}`);
