console.log("hello from outside the function");

function hello(){
    console.log("hello from inside the function");
}

console.log("hello from outside the function");

//this is synchronous process step wise step so in this first a grec will make like global excution content in call stack to run every line of js we need a call stack and then "hello from outside this will go in call stack" print after that it will pop up from call stack ....and then this console.log will be delete.......


//async proceess
console.log("hello from outside the function" );

setTimeout(()=>{
console.log("hello from inside the function");
},3000);

console.log("hello from lats line");

//phle first line process hui uske pass settimeout m time lg rha tha to last line run ho gyi


 
