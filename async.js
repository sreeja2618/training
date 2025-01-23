// const { reject } = require("async");

// console.log(10);
// console.log(20);
// //sub task
// // setTimeout(()=>{
// //     console.log(30);
// // },2000)
// // setInterval(()=>{
// //     document.write("MRU");
// // },1500)
// console.log(40);
// //Promise
// let p1=new Promise(()=>{});
// console.log(p1);

// let p2=new Promise((resolve,reject)=>{
//     resolve("success");
// })
// console.log(p2);
// p2.then((response)=>{
//     console.log(response)
// })

// p2.finally(()=>{
//     console.log("finally for both");
// })
// p2.catch((error)=>{
//     console.log(error)
// })
// let p3=new Promise((resolve,reject)=>{
//     reject("failed");
// })
// console.log(p3);
// p3.then(data=>console.log(data))
// .catch(err=>console.log(err))
// .finally(()=>{
//     console.log("finally for both")
// })
//api fetching
// function fetchUsers(){
//   let response=fetch("https://jsonplaceholder.typicode.com/users")
//   response.then(res=>{
//     // console.log(res.json()),returns a promise
//     //we use then again to retrieve the data stored in promise result
//     return res.json().then(data=>{
//         console.log(data);
//         let store=document.getElementById("store");
//         console.log(store);
//         data.map(user=>{
//             store.innerHTML+=`
//             <tr>
//             <td>${user.id} </td>
//             <td>${user.name} </td>
//             <td>${user.email} </td>
//             <td>${user.company.name} </td>
//             </tr>`
//         })
//     })
//   })
//   .catch(err=>console.log(err))
// }
// fetchUsers()

//async and await

// function demo(){
//   console.log("Start");
//   console.log(10);
//   console.log(20);
//   return;
//   console.log("end");
// }
// demo();
let p=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("success");
  },5000)
})
async function demo(){
  console.log("Start");
  let x= await p;
  console.log(x);
  console.log("End");
}
demo();

async function fetchUser(){
  let response= await fetch("https://jsonplaceholder.typicode.com/users");
  let data=await response.json();
  console.log(data);

}
fetchUser()