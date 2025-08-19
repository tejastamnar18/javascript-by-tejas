var a = 100;
if(true)
{
var a = 300;
let  b = 200;
const c = 100;
//console.log("Inside if block", a);
}
//console.log(a); // 300
//console.log(b); // ReferenceError: b is not defined
//console.log(c); // ReferenceError: c is not defined



// Nested Scope Example
function one(){
    const name = "Tejas"

    function two(){
        const age = 20;
        console.log(name);
    }
    //console.log(age); // ReferenceError: age is not defined
    two();

}
// one(); // Tejas

if(true){
    const username = "Tejas";
    if(username === "Tejas"){
        const age = 20;
        //console.log(username + age); 
        }
    //console.log(age); // ReferenceError: age is not defined
}
//console.log(username); // ReferenceError: username is not defined



// Interesting Example
 
console.log(addOne(5)); // 6


function addOne(num){
    return num + 1;
}


addTwo(5);// ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}
