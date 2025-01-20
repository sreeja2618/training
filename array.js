// const u1="ss";
// const u2="dd";
// const u3="ss";
// const u4="ll";
// const u5="oo";
const users=["ss","dd","ss","ll","oo"];
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }

//map returns one more array
let x=users.map((user)=>{
    return (user);
})
console.log(x);
let y=users.forEach((user)=>{
return(user)
})
console.log(y);
//methods in array
// const users=["ss","dd","ss","ll","oo"];
// users.push("UU");
// for(let i=0;i<users.length;i++){
//          console.log(users[i]);
//      }

// users.pop();
// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
//     }
// users.unshift("ee");
// for(let i=0;i<users.length;i++){
//              console.log(users[i]);
//           }

//users.shift();
//for(let i=0;i<users.length;i++){
//   console.log(users[i]);
//                     }
// console.log(users.reverse());

// let x=(users.join(""));
// console.log(x,typeof(x));

// let users1=["ww","kk","cc","aa","qq"];
// let users3=["oo","jj"];
// let users2=users+users1
// console.log(users2)
// let users2=users.concat(users1)
// console.log(users2);

// let user={
//     name:"sreeja",
//     age:25,
//     city:"adb",
//     address:{
//         area:"ranisathiji",
//         street:{
//         pincode:500401
//         }
        
//     }
// }
// console.log(user);
// console.log(user.name);
// console.log(user.address)
// console.log(user.address.street.pincode)

// //create array of objects
// let array1=[{
//     name:"sreeja",
//     place:"adb"
// },{
//     name:"sreeja",
//     place:"adb"
// },
// {
//     name:"sreeja",
//     place:"adb"}
// ]
// array1.map((user)=>{
//     console.log(user.name)
// })

let user={
 name:"sreeja",
        age:25,
        city:"adb",
}
x=JSON.stringify(user);
console.log("JSON OBJECT: "+x);

y=JSON.parse(x);
console.log(y);

