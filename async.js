console.log(10);
console.log(20);
//sub task
// setTimeout(()=>{
//     console.log(30);
// },2000)
// setInterval(()=>{
//     document.write("MRU");
// },1500)
console.log(40);
//Promise
let p1=new Promise(()=>{});
console.log(p1);

let p2=new Promise((resolve,reject)=>{
    resolve("success");
})
console.log(p2);

let p3=new Promise((resolve,reject)=>{
    reject("failed");
})
console.log(p3);