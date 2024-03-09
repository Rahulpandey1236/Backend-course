/*
it has function scope but no block scope
used to define a varible
it is hoisted
*/


// function f1(){
//     var i=5;//local or function scope
//     console.log(i);
// }
// console.log(i);


// {
//     var i=8;//no block scope

// }
// console.log(i);



//console.log(i);
// var i = 8;


console.log(i2);
var i2 = 34;
console.log(i2);


//++++++++++++++++ let

//no hoistng
//block scope

//example of no hoisting
// console.log(i);//error no hoisting
// let i=7;

//block scope
// let {   //error in this code
//     let name = "rahul"
// }
// console.log(name);


//+++++const++++++++

//scope is exactly same
//const variables are final no creassingned

const country = "indai"  //error cant be reassigned 
country = "usa"
console.log(country);


