

function longTask(millSecondTime){
    var dt=new Date();
    while((new Date-dt)<=millSecondTime){

    }
}

function showEnd(){
    console.log("Finished")
}

console.log("Started")
setTimeout(showEnd,2000);

console.log("Started")
setTimeout(showEnd,2000);

console.log("Started")
setTimeout(showEnd,2000);


