// function addtocart(){
//     alert("Product is added to cart");
// }
// function add(a,b){
//     console.log(a+b);
// }
// add(10,40);
// //function without pramaters
// function demo(){
// console.log("function without pramaters")
// }
// demo();
// //function with parameters
// function userdetails(name,age,city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }

// userdetails("sreeja",19,"adb");
//Anonymus Function
// function(){
//     console.log("Anonymus Function");
// }
// //Function expression
// x=function(){
//     console.log("Function expression");
// }
// x();

// //iife
// (function(){
//     console.log("iife");
// })();

// //arrow function
// let y=()=>{
//     console.log("Arrow function");
// }
// y();

// let z=_=>{
//     console.log("Arrow function");
// }
// z();

// let p=a=>{
//     console.log(a);
// }
// p(2);

// let s=(a,b)=>{
//     console.log(a+b);
// }
// s(2);
// //without{} order is not proper
// let z1=_=>
//     console.log("Arrow function");
//     console.log("Arrow1 function");
// z1();

// //explicit return(curly braces are must)
// function demo1(u,v)
// {
// return u+v;
// };
// let p=demo1(10,3);
// console.log(p);

// //Arrow  function(implicit return)
// let y=(a,b)=>a+b; 
// console.log(y(10,20));

// //termiantes the program
// function demo(a,b){
//     console.log("d");
//     return a+b;
//     console.log("d");
// }
// demo(10,20);

//Higher order function

// function demo(a){
//     return a;
// }
// let x=demo(function(){return "Callback function"});
// console.log(x());

// function demo(a){
//     return a;
// }
// let x=demo(function(a,b){return a+b});
// console.log(x(10,2));

// function parent(callback){
//     return callback;
// }
// let z=parent(add(4,5));
// console.log(z);
// function add(a,b){
//     return a+b;
// }

// closure
let a=10;
function x(){
    var user="ww";
    let company="Google";
    const salary=12345;
    console.log(user);
    console.log(company);
    console.log(salary);
    console.log(a);
}
x();