const user = {
    username: "Tejas",
    price : 199,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
        //console.log(this); // This refers to the user object
    }

}

// user.welcomeMessage(); // Welcome Tejas, your price is 199
// user.username = "Sam";
// user.welcomeMessage(); // Welcome Sam, your price is 199

//console.log(this); // This refers to the global object in non-strict mode, or undefined in strict mode



// function sayHello() {
//     console.log(this);
// }
// sayHello(); 

// const sayHello = function() {
//     let username = "Tejas"
//     console.log(this.username);
// }


const sayHello = () => {
    let username = "Tejas"
    console.log(this.username); // This will be undefined in arrow functions
    // Arrow functions do not have their own 'this', they inherit it from the parent scope
}
sayHello(); 