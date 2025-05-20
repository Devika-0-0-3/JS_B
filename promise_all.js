const Promise=require('promise')

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Devika")
        },3000)
    })
}


function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("56222334852")
        },2000)
    })
}

Promise.all([getName(),getMobile()]).then((result)=>{
    console.log(result)
})
//to get two of them at same time promise.all is used

