console.log(`Line::1--- ${2 > 1}`);
console.log(`Line::2--- ${'02' > 1}`);
// Note:- Line::115 is not predictable. When we compare two things then their DataType should be same.
//        TypeScript do not allow to performe the comparison between two different data types.

console.log(`Line::3--- ${null > 0}`);
console.log(`Line::4--- ${null < 0}`);
console.log(`Line::5--- ${null == 0}`);
console.log(`Line::6--- ${null >= 0}`);
console.log(`Line::7--- ${null <= 0}`);

console.log(`Line::8--- ${null > 0}`);
console.log(`Line::9--- ${null < 0}`);
console.log(`Line::10--- ${null == 0}`);
console.log(`Line::11--- ${null <= 0}`);
console.log(`Line::12--- ${null >= 0}`);

// Note:- The reason is that an equality check == and comparisons > < >= <= work differently.
//        Comparisons convert null to a number, treating it as 0. That's why (Line::6) null >= 0 is true and (Line::3) null > 0 is false.
//        Some times null converts into 0 or NaN

// Strictly Equality Check === and !==
console.log(`Line::13--- ${"2" === 2}`);
console.log(`Line::13--- ${"2" !== 3}`);