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

//string are used to represent text in JavaScript
//they are immutable, meaning once created, they cannot be changed
//you can create a string using single quotes, double quotes, or backticks
//backticks allow for template literals, which can include variables and expressions
//strings have many built-in methods for manipulation and inspection
//common methods include toUpperCase(), toLowerCase(), indexOf(), substring(), slice(), trim(), replace(), includes(), split()

//String.prototype is the prototype object for all string objects
//it contains methods and properties that are available to all string instances
//you can access the prototype object using String.prototype
//you can also create your own string objects using the String constructor
//but it's generally recommended to use string literals instead of creating new String objects
//string literals are more efficient and easier to read
//you can also use string interpolation with template literals to create dynamic strings
//template literals are enclosed in backticks and can include variables and expressions using ${}
//this allows for more readable and maintainable code when working with strings
//you can also use string methods to manipulate and inspect strings
//for example, you can use toUpperCase() to convert a string to uppercase, or indexOf() to find the position of a substring








