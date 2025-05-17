function hello(a,b){

    console.log("Hello world");
    return a+b;
}

console.log(hello(10,20));

var a=[1,2,3,4,5]
console.log(a)
for(i=0;i<a.length;i++){
    console.log(a[i]);
}

//nested function
var num=10 //global variable
function hello(){
    var num=20
    function hey(){
        num=40 //local variable
    }
    hey() //hey can be called inside hello
    console.log(num) 
}

hello()
console.log(num)