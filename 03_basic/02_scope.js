var a = 100;
if(true)
{
var a = 300;
let  b = 200;
const c = 100;
console.log("Inside if block", a);
}
console.log(a); // 300
//console.log(b); // ReferenceError: b is not defined
//console.log(c); // ReferenceError: c is not defined