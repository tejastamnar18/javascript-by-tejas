//Prmitive

// 7 types of primitive data types in JavaScript
// 1. String
let name = "Tejas";
console.log(typeof name); // Output: string

// 2. Number
let age = 30;
console.log(typeof age); // Output: number

// 3. BigInt
let bigNumber = BigInt(1234567890123456789012345678901234567890);
console.log(typeof bigNumber); // Output: bigint

// 4. Boolean
let isActive = true;
console.log(typeof isActive); // Output: boolean

// 5. Undefined
let notDefined;
console.log(typeof notDefined); // Output: undefined

// 6. Null
let emptyValue = null;
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript)

// 7. Symbol
let uniqueSymbol = Symbol('unique');
console.log(typeof uniqueSymbol); // Output: symbol

// Non-primitive(Reference) Data Types
// 1. Object
let person = {
    name: "Tejas",
    age: 25
};
console.log(typeof person); // Output: object

// 2. Array (which is a type of object)
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // Output: object

// 3. Function (which is also a type of object)
function greet() {
    return "Hello!";
}
console.log(typeof greet); // Output: function

// 4. Date (which is a type of object)
let currentDate = new Date();
console.log(typeof currentDate); // Output: object



// Summary
// Primitive types are immutable and passed by value, while non-primitive types are mutable and passed by reference.

//there are 7 primitive data types and many non-primitive data types in JavaScript.

// Note: The typeof operator returns "object" for null, which is a known quirk in JavaScript.

