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