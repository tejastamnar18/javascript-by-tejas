

function sayHello() {
console.log("H");
console.log("e");
console.log("l");
console.log("l");
console.log("o");
}

// sayHello(); 

function add(a, b) {

    return a + b; // This will return the sum of a and b

    // The following lines will not execute because the function has already returned
    // console.log("This will not execute"); 
    // return a + b; // This line is redundant and will not run
    // console.log("This will also not execute"); // This line will also not run
    // You can also write it as:
    // let result = a + b;
    // return result;
    // console.log("This will not execute"); // This line will not run because of the return statement
}

add("5", 44); // 15

const result = add(5, 4); 

//console.log("Result:",result); 

function logInUserMessege(username){
    if(!username) {
        console.log("Username is not provided");
        return
       
    }

    return `${username} just logged in`
}

// console.log(logInUserMessege("Tejas")); // Tejas just logged in
console.log(logInUserMessege());//undefined just logged in


