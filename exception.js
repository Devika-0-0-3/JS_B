var r=require('readline-sync');
var a=r.question("Enter a number:");
a=Number(a);//convert string to number
try{
    if(a===0)
    throw "User not found"
}catch(err){
    console.log("Error: " + err);
    console.log("Please enter a valid number");
}finally{
    console.log("Finally block executed");
}

//try used to execute code that may throw an error
//catch used to handle the error
//finally used to execute code after try and catch
//throw used to throw an error
//Error object used to create custom error messages