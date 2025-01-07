// take 3 values and print which value is greater among 3 numbers
let a=prompt("Enter first number");
let b=prompt("Enter second number");
let c=prompt("Enter third number");
if(a>b && a>c){
    console.log("First number is greater");
}
else if(b>a && b>c){
    console.log("Second number is greater ")
}
else if(c>a && c>b){
    console.log("Third number is gretaer");
}
else{
    console.log("All numbers are equal");
}