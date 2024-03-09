//promises

// const { resolve } = require("path");


// const simranpromise = new Promise((resolve,reject) =>{
//     let fatheragree = true

//     if(fatheragree){
//         resolve("yeee, shadi hogi ab to")
//     }else{
//         reject("papa nhi maan rhe ")
//     }
// });

// simranpromise.then((msg) =>{ // positive scenerio
//     console.log("message :",msg );
//     console.log("let book the wedding venue")
// }).catch((msg)=>{    //negative scenario
//     console.log("message:" ,msg);
//     console.log("tinder kaha ho yrr ");
// }).finally(()=>{// always execute
//     console.log("life m clearity mili");
// })


//other examples of promises

// const f1promise = new Promise((resolve,reject) =>{
//     setTimeout(()=>{

//         if(Math.random() > 0.5){
//             resolve("friend 1 : chlo goa ke liye ready hote h ")
//         }else{
//             reject(" friend 1 :mai bemar hu")
//         }
//     },3000)
// })


// const f2promise = new Promise((resolve,reject) =>{
//     setTimeout(()=>{

//         if(Math.random() > 0.5){
//             resolve("friend 3 : chlo goa ke liye ready hote h ")
//         }else{
//             reject("friend 2 :nhi muhe kaam hai")
//         }
//     },4000)
// })
// const f3promise = new Promise((resolve,reject) =>{
//     setTimeout(()=>{

//         if(Math.random() > 0.5){
//             resolve("friend 3 : chlo goa ke liye ready hote h ")
//         }else{
//             reject(" friend 3: nhi muhe pdhna h")
//         }
//     },2000)
// })


// Promise.all([f1promise,f2promise,f3promise]).then((msg)=>{
//     console.log(msg);
//     console.log("we are going to goa");    
// }).catch((msg)=>{
//     console.log(msg);
//     console.log("chlo cancel kro plan");
// })




//other examples ==> promise.any




const gf1promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("GF1: yhh i am coming for dinner")
        }else{
            reject("i have some work")
        }
    },1000)
})


const gf2promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("GF2: yhh i am coming for dinner")
        }else{
            reject("i have some work")
        }
    },1000)
})


const gf3promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("GF3: yhh i am coming for dinner")
        }else{
            reject("i have some work")
        }
    },1000)
})


Promise.any([gf1promise,gf2promise,gf3promise]).then((msg)=>{
    console.log(msg);
    console.log("my valentines is sorted");
}).catch((msg)=>{
    console.log(msg);
    console.log("you will be a part of bajrangdal");
})