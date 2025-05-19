let name = 'rahul';
const age = 32;

console.log(name + age + ' from Kanpur');  // This is old syntax don't use.

// Use template literals (backticks: ``) and string interpolation (${}) for cleaner, more readable code.
console.log(`${name} is ${age} years old and he is from Kanpur.`);  

// We can also create string like this
let email = new String("rahul-kumar@gmail.com");
let password = "        rahulKumar1234           ";
let url = "https://github.com/%20rahul-kumar/";

console.log(`Line::1------> ${email}`);
console.log(`Line::2------> ${email.__proto__}`);
console.log(`Line::3------> ${typeof email.__proto__}`);
console.log(`Line::4------> ${email.toUpperCase()}`);
console.log(`Line::5------> ${email.charAt(2)}`);
console.log(`Line::6------> ${email.indexOf('h')}`);
console.log(`Line::7------> ${email.substring(0,5)}`);
console.log(`Line::8------> ${email.slice(0,5)}`);
console.log(`Line::9------> ${email.slice(5,-1)}`);
console.log(`Line::10------> ${password.trim()}`);
console.log(`Line::11------> ${url.replace("%20","")}`);

let address = "280001-Raygad-Rajsthan";
let updatedAddress = address.split("-");
console.log(`Line::12------> ${JSON.stringify(updatedAddress)}`);
