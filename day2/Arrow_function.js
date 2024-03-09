/*  Arrow function have no arguments and have no return   */

let hello = () => console.log("hello students");
hello()


//function with arguments
var sum = (a,b) =>a+b;
console.log(sum(4,5));


//function with parameters multiple lines of function body
var mul = (b,c) => {
    console.log("need to be processed");
    return c*b;
}
console.log(mul(7,8));

//IIFE => immediately involked function expressions

(function(){
    console.log("heelo students");
})()