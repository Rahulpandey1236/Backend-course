// function hello(){
//     let name = "rahul";
//     console.log(name);
// }
// hello();

// console.log(name);//cant access this by using closure we acn acess this


function outerfun(){
    let outervar = "i am from outer fun"
    function inner(){
        console.log(outervar);
    }
    return inner
}
let fn = outerfun()// this fn variable give the fucntion i set
fn()// i am still able to hold the local variable of outer functioncall this closures
//we use in this encapsulation


function customercounter(){//outer function
let count = 0;
return function(){//ananomys inner function
    count++;//closure
    console.log("new customer counter is ",count);
}
}

let counter = customercounter()
counter();
counter()
counter()