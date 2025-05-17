var dt=new Date();
console.log("Hello");
for(i=0;i<1000;i++){
    console.log("Loop");
}
console.log("The End");

var diff=new Date()-dt;
console.log("Time taken:"+diff+"ms");


function longTask(millSecondTime){
    dt=new Date();
    while((new Date-dt)<=millSecondTime){

    }
}

console.log("Started")
longTask(4000);
console.log("Finished")

nd=new Date()-dt;
console.log("Time taken:"+nd+"ms");

//1000ms=1second