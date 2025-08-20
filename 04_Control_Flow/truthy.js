const userEmail = `tejas@gmail.com`;// this is a truthy value

if (userEmail) {
  console.log(`User email is: ${userEmail}`);
}
else {
  console.log(`User email is not provided`);
} 

//! Truthy and Falsy values
const userName = ``; // empty string is falsy
if (userName) {
  console.log(`User name is: ${userName}`);
}
else {
  console.log(`User name is not provided`);
}


//! Truthy and Falsy values
// Truthy values in JavaScript
// "Hello", 1, [], {}, true, -1, 3.14, "0", "false", " ", function() {}

// Falsy values in JavaScript
// 0, "", null, undefined, NaN, false,0n,-0


let val1;
val1 = 5??10
//console.log(val1); // 5

val1 = null??10
//console.log(val1); // 10

val1 = undefined??15
//console.log(val1); // 15

val1 = null ?? 10 ?? 20 //nullish coalescing operator
console.log(val1); // 10



//!ternary operator

// Syntax : condition ? true : false;

const iceTeaPrice = 90;
iceTeaPrice < 100 ? console.log("Ice tea is affordable") : console.log("Ice tea is expensive");
