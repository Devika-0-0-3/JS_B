var hello=(data)=>{
    console.log("Data:"+data);
}

var hey=(callback)=>{
    console.log("Hey working")
    callback("All Work Done")
} //callback is a function that is passed as an argument to another function
//callback is hello
//When you are done, call the callback function ie do this
//It hels js to wait for the function to finish
//Do things in order especially for delays, loading or waiting for data

hey(hello)