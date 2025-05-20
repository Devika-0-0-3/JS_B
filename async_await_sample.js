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

async function getUser(){
    let name=await getName()
    console.log(name)
    let mobile=await getMobile()
    console.log(mobile)
}
//pending promise
//await is only valid in async functions
getUser()