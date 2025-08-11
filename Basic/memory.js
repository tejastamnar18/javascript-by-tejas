// stack(primitive) , Heap(non-primitive) memory in JavaScript

// In JavaScript, memory management is handled automatically by the engine, but understanding how primitive and non-primitive data types are stored can help optimize performance.

// Primitive data types are stored in the stack memory.
// Non-primitive data types (objects, arrays, functions) are stored in the heap memory.


let myname="Tejas"; // Primitive type stored in stack

let anotherName = myname; // Copying value, anotherName is also a primitive type stored in stack
anotherName = "John"; // Changing anotherName does not affect myname
console.log(myname);
console.log(anotherName); 


let personOne = {
    name: "Tejas",
    age: 25
}; // Non-primitive type stored in heap
let personTwo = personOne; // personTwo references the same object in heap
personTwo.age = 30; // Changing personTwo affects personOne because they reference the same object
console.log(personOne.age); // Output: 30
console.log(personTwo.age); // Output: 30

// Summary:
// - Primitive types are stored in stack memory and are immutable.
// - Non-primitive types are stored in heap memory and are mutable, allowing for shared references.
// - When a primitive type is assigned to another variable, a copy of the value is made.
// - When a non-primitive type is assigned, both variables reference the same object in memory.