//function as argument or fun as parameter

function operation(opearotfun,a,b){
    return opearotfun(a,b)
}

function add(a,b){
return a+b;
}
let res = operation(add,5,6)
console.log(res);

//

function greetmethod(){
    return function(){
        console.log("hello students");
    }
}
let greetfun = greetmethod();
console.log(typeof greetfun);
greetfun()


//for each method
let players = ["sachin","virat","dhoni","rohit"]
players.forEach(function(e){
console.log(e);
})

//players.forEach((player)=>console.log(player));
// MAP use as a hof

 let arr = [1,2,3,4,5]
let cube_Arr = arr.map(num=>num**3)
console.log(cube_Arr);
console.log(arr);


// filter
let arr1 = [1,2,3,4,5,6,7,8,9,10]
let even_arr = arr1.filter((num)=>num%2==0)
console.log(even_arr);


//reduce

let arr_3 = [1,2,3,4,5,6,7,8,9,10]
let result = arr_3.reduce((curr,next) => curr+next);
console.log(result); 


//Synchronous and asynchronous process

