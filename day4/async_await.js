// async function students(){
//     return "hello"
// }

// console.log(students());

// students().then((msg)=>{
// console.log(msg);
// })


//print hello world after a wait 



// //1.

// async function printafterawait(){
//     console.log("first line");
//    setTimeout(()=>{

//     console.log("hello students");
//    },3000)
//    console.log("last line");
// }

// printafterawait()

//2.

async function printafterawait(){
    
console.log("first line");

let data = new Promise((resolve,reject)=>{

    setTimeout(()=>{

        resolve("hello students");
       },3000)
})
   
   let res = await data //start waiting for the data promise to the complted
   console.log(res);
   console.log("last line");
}

printafterawait()