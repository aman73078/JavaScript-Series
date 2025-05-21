let currentDate = new Date();
console.log(`Line::1------> ${currentDate}`);
console.log(`Line::2------> ${currentDate.toString()}`);
console.log(`Line::3------> ${currentDate.toDateString()}`);
console.log(`Line::4------> ${currentDate.toLocaleString()}`);
console.log(`Line::5------> ${currentDate.toLocaleString('en-US')}`);
console.log(`Line::6------> ${currentDate.toLocaleString('en-IN')}`);
console.log(`Line::7------> ${new Date('2025-02-21')}`);
console.log(`Line::8------> ${new Date('01-23-2025')}`);
console.log(`Line::9------> ${new Date('25-11-2025')}`);

let timeStamp = Date.now();

console.log(`Milliseconds: ${timeStamp}`);
console.log(`Milliseconds (via Date object): ${currentDate.getTime()}`);

console.log(`Seconds: ${Math.floor(timeStamp / 1000)}`);
console.log(`Minutes: ${Math.floor(timeStamp / 1000 / 60)}`);
console.log(`Hours: ${Math.floor(timeStamp / 1000 / 60 / 60)}`);
console.log(`Days: ${Math.floor(timeStamp / 1000 / 60 / 60 / 24)}`);

console.log(`Day : ${currentDate.getDay()}`);
console.log(`Date : ${currentDate.getDate()}`);
console.log(`Year : ${currentDate.getFullYear()}`);
console.log(`Month : ${currentDate.getMonth()}`);

console.log(currentDate.toLocaleString('en-US', {
    timeZone: "America/New_York",
    weekday: "long",
    timeZoneName: "long"
}));

// Note:- We can customize the date by using this .toLocalString
//          for getting suggestion press [ctrl + space]



