for(let i = 0; i<10;i++){
    console.log(`Hello ${i}`);
};

for(let i = 0; i<=10;i++){
    if(i===5){
        console.log(`Number ${i} is lucky number.`);
    };
    console.log(`Hello ${i}`);
};

for(let i = 1; i<=10;i++){
    console.log(`Table of ${i}`);
    for(let j=1; j<=10;j++){
        console.log(`${i}*${j} = ${i*j}`);
    };
};
let userList = ['rahul','mahesh','kishor','vijay'];
for(let i=0; i < userList.length; i++){
    console.log(`${i+1}. ${userList[i]}`);
};

let height = 5;
for(let i = 1; i<=height; i++){
    let spaces = ' '.repeat(height-i);
    let stars = '*'.repeat(2*i - 1);
    console.log(spaces + stars);
};

for(let i = 1; i<=10; i++){
    if(i===5){
        console.log(`Detected number ${i}. Just stop the process.`);
        break;
    }
    console.log(`Print ${i}`);
}

for(let i = 1; i<=10; i++){
    if(i===5){
        console.log(`Detected number ${i}. Just stop the process.`);
        continue;
    }
    console.log(`Print ${i}`);
};