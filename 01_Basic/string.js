const name="Tejas";
const repocount=5;

//console.log(name + repocount+" repositories");

console.log(`Hello My name is ${name.toUpperCase()} and I have ${repocount} repositories`);


const gameName = new String("Cric-ket");

console.log(gameName[0]); // C

console.log(gameName.__proto__); // String.prototype

console.log(gameName.length);// 7

console.log(gameName.toUpperCase()); // CRICKET

console.log(gameName.charAt(2)); // i

console.log(gameName.indexOf("i")); // 2

const newString = gameName.substring(0, 4);
console.log(newString); // Cric

const newString2 = gameName.slice(-6, 4);
console.log(newString2); // ric

const newString3 = "      tejas     ";
console.log(newString3.trim()); // tejas

// note: that trim() does not change the original string

const url = "https://www.google.c%20om";
console.log(url.replace("%20", "--")); // https://www.google.c--om

console.log(url.includes('tejas')); // false

console.log(gameName.split("-")); // [ 'Cric', 'ket' ]


//for example, you can use toUpperCase() to convert a string to uppercase, or indexOf() to find the position of a substring








