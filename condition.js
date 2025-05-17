var read=require('readline-sync');
var value=read.question('Enter a number:');
if(value%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

var a=read.question("Enter a number:");
var b=read.question("Enter a number:");

if(a>b){
    console.log("A is greater");
}
else{
    console.log("B is greater");
}