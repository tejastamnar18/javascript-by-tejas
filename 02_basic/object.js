// singleton

// object literals

const mySymbol = Symbol("key1");


const myObj = {
    name: "Tejas",
    age: 21,
    location: "India",
    isLoginIn: false,
    [mySymbol]:"value1",

    

}

console.log(myObj.name); // Tejas
console.log(myObj["age"]); // 21
console.log(myObj[mySymbol]);// value1


myObj.grreeting = function() {
    console.log("Hello, " + this.name);
}

console.log(myObj.grreeting()); // Hello, Tejas


// Notes



