// let e=document.getElementById("demo");
// e.innerText="G+"
// console.log(e);

// let e=document.getElementById("test");
// e.innerHTML="<h1>Header<h1>"
// console.log(e);
// let ele=document.getElementsByClassName("test");
// console.log(ele);

// console.log(Array.isArray(ele));

// ele[0].innerText="Hello"
// ele[0].style.backgroundColor="yellow"

//spread operator
// let x=[...ele];
// console.log(Array.isArray(x));
// x.map((ele)=>{
//    ele.style.backgroundColor="pink"
// })
// let ele=document.getElementsByTagName("div");
// console.log(ele);


// let ele=document.getElementsByName("formData1");
// console.log(ele);
// console.log(Array.isArray(ele));
// [...ele].map(inp=>{
//     console.log(inp);
// })

// let ele=document.querySelector("#mru");
// console.log(ele);

// let ele=document.querySelectorAll(".test");
// console.log(ele);

// let btn=document.querySelector("#btn");
// //addEventListeenr("event",()=>{})
//     btn.addEventListener("click",()=>{
//         console.log("Button clicked");
//         alert("hi");
//         document.body.click.backgroundColor("yellow");
//     })

// let btn=document.querySelector("#btn1");
// //addEventListeenr("event",()=>{})
//     btn.addEventListener("dblclick",()=>{
//         console.log("Button clicked");
//         alert("hi");
//         document.body.click.backgroundColor="yellow";
//     })

// let divblock=document.getElementById("red");
// divblock.addListener("mousehover",()=>{
//     document.body.style.backgroundColor="red"
    
// })
// let bg=document.querySelector(".bgColor");
// [...bg].map((ele)=>{
//     ele.addEventListener("mouseover",()=>{
//         ele.style.backgroundColor=ele.innerText;
//     })
// })

// let ele=document.createElement("h1");
// ele.innerText="Dynamic";
// console.log(ele);
// let image=document.createElement("img");
// image.src="./paris1.png"
// console.log(image);
// document.body.appendChild(ele);
// document.body.appendChild(image);

let form=document.querySelector("form");
let username=document.getElementById("username");
let mail=document.getElementById("usermail");
let pass=document.getElementById("userpass");
form.addEventListener("submit",(event)=>{
    //to stop refreshing
    event.preventDefault();
//     console.log(event);
//    console.log("Form submitted");
let uname=username.value;
console.log(uname);
let uemail=mail.value;
console.log(uemail);
let upass=pass.value;
console.log(upass);
let userDetails={uname,uemail,upass};
console.log(userDetails);
localStorage.setItem("userData",JSON.stringify(userDetails));

})



