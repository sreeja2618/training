function addtocart(){
    alert("Product is added to cart");
}
function add(a,b){
    console.log(a+b);
}
add(10,40);
//function without pramaters
function demo(){
console.log("function without pramaters")
}
demo();
//function with parameters
function userdetails(name,age,city){
    console.log(name);
    console.log(age);
    console.log(city);
}

userdetails("sreeja",19,"adb");
//Anonymus Function
// function(){
//     console.log("Anonymus Function");
// }
//Function expression
x=function(){
    console.log("Function expression");
}
x();

//iife
(function(){
    console.log("iife");
})();

//arrow function
let y=()=>{
    console.log("Arrow function");
}
y();

let z=_=>{
    console.log("Arrow function");
}
z();

let p=a=>{
    console.log(a);
}
p(2);

let s=(a,b)=>{
    console.log(a+b);
}
s(2);
//without{} order is not proper
let z1=_=>
    console.log("Arrow function");
    console.log("Arrow1 function");
z1();

