//for-loop
for(let i=1;i<=5;i++){
    console.log("Sreeja");
}
let n1=100;
for(let i=1;i<=n1;i++){
    console.log("Sreeja");
}
let n=100;
for(let i=1;i<=n;i++){
    if(i%2==0){
        console.log(i+" is an even number.");
    }
    else{
        console.log(i+" is an odd number.");
    }
}

//while-loop
let a=10;
while(a<=20){
    console.log("Sreeja");
    a++;
}

//do-while
let i=1;
do{
    console.log("Sreeja");
    i++
}while(i<=10)

// let i1=1;
// do{
//     console.log("Sreeja");
//     i1++
// }while(i>=10)

for(let i=1;i<=10;i++){
    console.log(i);
    if(i==5)
        break;
}

for(let i=1;i<=10;i++){
    if(i==5)
        continue;
    console.log(i);
}
