// //
// console.log(10+10);
// console.log("10"+"10");
// console.log(10+40+"Hi");
// console.log("JS"+50+50);//JS5050
// console.log("JS"+(50+50));
// console.log(10-5);
// console.log("10"-5);//typecasting
// console.log("10"-"5");
// console.log("10"-"hi");//NaN
// console.log(5*5);
// console.log("5"*5);//typecasting
// console.log(10/2);
// console.log("10"%2);//typecasting
// console.log(2**5);
// console.log("2"**5);//typecasting
// let a=10;
// console.log(++a);//pre-increment
// console.log(a++);//post-increment
// console.log(--a);//pre-decrement
// console.log(a--);//post=decrement
// //assignment operators
// let b=10;
// console.log(b);
// console.log(b*=5);
// console.log(b+=5);
// console.log(b/=5);
// console.log(b-=5);
// console.log(b**=5);
// console.log(b%=5);
// //relational
// console.log(10==10);
// console.log("10"==10);
// console.log(10===10);
// console.log("10"===10);
// console.log(100!=10);
// console.log("10"!=10);
// console.log(100!==10);
// console.log("10"!==10);
// console.log(10>5);
// console.log(10>10);
// console.log(10<50);
// console.log(10>=10);
// //logical
// console.log(true&&true);
// console.log(false&&true);
// console.log(true&&false);
// console.log(false&&false);
// console.log(true||true);
// console.log(false||true);
// console.log(true||false);
// console.log(false||false);
// console.log(!false);
// console.log(!true);
// conditional
if(true){
    console.log("If is executing");
}
if(false){
    console.log("If is executing");
}
let age=19;
if(age>=18){
    console.log("major");
}
else{
    console.log("minor");
}
//ternary
age>=18? console.log("major"):console.log("minor");
let day=prompt("enter a day here");
if(day==1){
    console.log("Monday");
}
else if(day==2){
    console.log("Tuesday");
}
else if(day==3){
    console.log("Wednesday");
}
else if(day==4){
    console.log("Thursday");
}
else if(day==5){
    console.log("Friday");
}
else if(day==6){
    console.log("Saturday");
}
else if(day==7){
    console.log("Sunday");
}
else{
    console.log("invalid");
}
let day1=prompt("enter a day here");
switch(Number(day1)){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:    
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("invalid")
    



}



