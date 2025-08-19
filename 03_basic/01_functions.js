

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
//console.log(logInUserMessege());//undefined just logged in

function calculatecartprice(...num1){
    return num1 
}
//console.log(calculatecartprice(100, 200,600));

const user = {
    username: "Tejas",
    price : 100,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user); 


// handleObject({
//     username: "sam",
//     price: 200
// }); 

const myNewArray = [1, 2, 3, 4, 5];

function returnSecondValue(getArray) {
    return getArray[1]; 
}


//console.log(returnSecondValue(myNewArray)); // 2
console.log(returnSecondValue([10, 20, 30, 40])); // 20


