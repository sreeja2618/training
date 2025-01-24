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

let divblock=decodeURIComponent.getElementById("divblock");
divblock.addListener("mousehover",()=>{
    document.body.style.backgroundColor="yellow"
    divblock.style.backgroundColor="blue"
})



