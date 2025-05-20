const num1 = 234;
console.log(`Line::1------> ${num1} & ${typeof num1}`);
const num2 = new Number(456);
console.log(`Line::2------> ${num2} & ${typeof num2}`);
console.log(`Line::3------> ${num2.toString().length}`);
console.log(`Line::4------> ${num2.toFixed()}`);

const num3 = 123.546;
console.log(`Line::5------> ${num3.toPrecision(2)}`);
console.log(`Line::6------> ${num3.toPrecision(6)}`);
console.log(`Line::7------> ${num3.toPrecision(4)}`);

const salary = 1000000;
console.log(`Line::8------> ${salary.toLocaleString('en-US')}`)
console.log(`Line::9------> ${salary.toLocaleString('en-IN')}`)

// ********************* Math ******************************

console.log(`Line::10------> ${Math}`)
console.log(`Line::11------> ${Math.abs(-10)}`);
console.log(`Line::12------> ${Math.abs(5)}`);
console.log(`Line::13------> ${Math.round(3.8)}`);
console.log(`Line::14------> ${Math.round(3.2)}`);
console.log(`Line::15------> ${Math.ceil(3.2)}`);
console.log(`Line::16------> ${Math.ceil(3.8)}`);
console.log(`Line::17------> ${Math.floor(5.8)}`);
console.log(`Line::18------> ${Math.floor(3.3)}`);
console.log(`Line::19------> ${Math.min(3,0,-55,66,100)}`);
console.log(`Line::20------> ${Math.max(500,0,99,66,100)}`);
console.log(`Line::21------> ${Math.random()}`);
console.log(`Line::22------> ${Math.floor(Math.random() * 10) + 1}`); // value between 1 to 10;

// If you want to generate the value between the min value and max value then use the below code

const min = 10;
const max = 20;

console.log(`Line::23------> ${Math.floor(Math.random() * (max - min + 1)) + min}`)



