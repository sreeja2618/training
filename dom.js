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

// let form=document.querySelector("form");
// let username=document.getElementById("username");
// let mail=document.getElementById("usermail");
// let pass=document.getElementById("userpass");
// form.addEventListener("submit",(event)=>{
    //to stop refreshing
    // event.preventDefault();
//     console.log(event);
//    console.log("Form submitted");
// let uname=username.value;
// console.log(uname);
// let uemail=mail.value;
// console.log(uemail);
// let upass=pass.value;
// console.log(upass);
// let userDetails={uname,uemail,upass};
// console.log(userDetails);
// localStorage.setItem("userData",JSON.stringify(userDetails));

// })

// let photo=document.createElement("video");
// photo.setAttribute("src","/vid.mp4");
// photo.setAttribute("controls","controls");
// console.log(photo);
// document.body.append(photo);

// let h1=document.createElement("h1");
// h1.setAttribute("id","demo");
// h1.innerText="MRU";
// console.log(h1);
// document.body.appendChild(h1);
// h1.removeAttribute(h1);

// let main=document.createElement("div");
// main.setAttribute("id","mainblock");
// main.style.border="2px solid red"
// main.style.width-"200px"
// main.style.width="200px"
// main.style.textAlign="center"
// console.log(main);

// let topEle=document.createElement("div");
// topEle.setAttribute("class","topblock");

// let image=document.createElement("img");
// image.setAttribute("src","/paris1.png")
// image.style.width="200px"

// // console.log(topEle);

// let bottomEle=document.createElement("div");
// bottomEle.setAttribute("class","bottomblock");
// // console.log(bottomEle);

// let h1=document.createElement("h1");
// h1.innerText="Paris";
// h1.style.textAlign="center";

// let btn=document.createElement("button");
// btn.innerText="View more";
// btn.style.border="none";
// btn.style.padding="10px";
// btn.style.backgroundColor="red";
// btn.style.color="white";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// main.appendChild(topEle);
// main.appendChild(bottomEle);

// document.body.appendChild(main);

// let form=document.querySelector("form");
// let username=document.getElementById("username");
// let mail=document.getElementById("usermail");
// let pass=document.getElementById("userpass");
// let gender=document.getElementsByName("gender");
// let check=document.getElementById("check");
// let show=document.getElementById("show");

// check.addEventListener("click",(event)=>{
//    if (event.target.checked==true){
//             pass.setAttribute("type","text");
//             show.innerText="Hide password"
//    }
//    else{
//             pass.setAttribute("type","password");
//             show.innerText="Show password"
//    }

// })
 
// form.addEventListener("submit",event=>{
//     event.preventDefault();
//     let un=username.value;
//     let up=pass.value;
//     let gen="";
//     for(let i =0;i<=gender.length-1;i++){
//         // console.log(gender[i].value);
//         // console.log(gender[i].checked);
//         if(gender[i].checked==true){
//             gen=gender[i].value;
//         }
//     }
//     let um=mail.value;
//     let userDetails={
//         username:un,
//         password:up,
//         email:um,
//         Gender:gen
//     }
//     console.log(userDetails);
//     sessionStorage.setItem("userData",JSON.stringify(userDetails))

// })

let array1=[{
        empid:1,
        empname:"sreeja",
        empcompany:"aaa",
        empsalary:"sss",
        empaddress:{
            empcity:"adb",
            emparea:"aaa"
            
}
    },{
        empid:2,
        empname:"sreeja1",
        empcompany:"aaa1",
        empsalary:"sss1",
        empaddress:{
            empcity:"adb1",
            emparea:"aaa1"
            
}
    }
    ]
    array1.map((user)=>{
        store.innerHTML+=`
       <tr>
      <td>${user.empid} </td>
       <td>${user.empname} </td>
        <td>${user.empcompany} </td>
        <td>${user.empsalary} </td>
        <td>${user.empaddress.empcity} </td>
        <td>${user.empaddress.emparea} </td>
        </tr>`
})





