/*function add(num1,num2,callback){
    let err=false
    if(num1==0){
        err=true
    }
    callback(num1+num2,err)
}

function multiply(num1,num2,callback){
    callback(num1*num2)
}

function div(num1,num2,callback){
    callback(num1/num2)
}


add(10,20,(sum,err)=>{
   
    if(err){
        console.log("First number is zero")
    }else{
          console.log(sum)
          multiply(sum,sum,(product)=>{
                console.log(product)
                div(product,10,(result)=>{
                    console.log(result)
                })
          })
    }
})
    */

//using promise
const Pomise= require('promise')

function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("Error")
        }
        resolve(num1+num2)

    })
}
function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("Error")
        }
        resolve(num1*num2)

    })
}
function div(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("Error")
        }
        resolve(num1/num2)

    })
}

add(10,20).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)
    //goes to next then when retuirn

}).then((product)=>{
    console.log(product)
    return div(product,10)
}).then((div)=>{
    console.log(div)
})
.catch((err)=>{
    console.log(err);
})