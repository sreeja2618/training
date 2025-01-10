for(let i=0;i<=4;i++){
    for(let j=0;j<=4;j++){
    document.write("*");
    }
    document.write("<br>");
}

for(let i=0;i<=4;i++){
    for(let j=0;j<=i;j++){
    document.write("*");
    }
    document.write("<br>");
}

for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==j||i+j==6){
            document.writeln("*");
        }
        else{
            document.writeln("&nbsp;")
        }
    }
document.write("<br>")
}

