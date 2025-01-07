let a=prompt("Enter first number");
let b=prompt("Enter second number");
let c=prompt("Enter third number");
switch(true){
    case (a>b && a>c):
        console.log("First number is greater");
        break;
    case (b>a && b>c):
        console.log("Second number is greater");
        break;
    case (c>a && c>b):
        console.log("Third number is greater");
        break;
    default:
        console.log("All numbers are equal");
        break;
}