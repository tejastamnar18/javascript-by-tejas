const tinderUser = {}

tinderUser.id = '12345';
tinderUser.name = "Tejas";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);


const regularUser = {
    email : "tejsa@gmail.com",
    userfullName: {
        firstName : "Tejas",
         lastName : "Tamnar",

}
}

//console.log(regularUser.userfullName); //

const obj1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

const obj2 = {
    key4: "value4",
    key5: "value5",
}

//const obj3 = {obj1, obj2};
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); 

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // [['id', '12345'], ['name', 'Tejas'], ['isLoggedIn', false]]

// Object.keys() returns an array of the object's own enumerable property names.
// Object.values() returns an array of the object's own enumerable property values.
// Object.entries() returns an array of the object's own enumerable string-keyed property [key, value] pairs.

console.log(Object.hasOwn(tinderUser, 'name')); // true
// Object.hasOwn() checks if the object has the specified property as its own property (not inherited).

// notes 
// 1. Objects in JavaScript are mutable and can be modified after creation.
// 2. Objects can contain properties and methods, and they can be nested.
// 3. The `this` keyword refers to the object itself within its methods.
// 4. Symbols can be used as unique property keys to avoid name collisions.

// Example of using a Symbol as a property key
const mySymbol = Symbol("uniqueKey");
const myObj = {
    [mySymbol]: "This is a unique value"
};



