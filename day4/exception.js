//syntax related

// console.log("hello;


//runtime exception


// let x = 5;
// console.log(x.toUpperCase());


/* logical exception  */

/*let num = 5; // logical erroe is divide by zero infinity is logical error
for(let i=-3;i<5;i++){
    console.log(num/i);
} */ 




//how to handle errors

try{
    let obj = undefined   //without try there is an error in these two lines 
    console.log(obj.name);
}catch(err){
    console.log("exception handled");
    console.log(err);
}



//try catch finally
try{
    let obj = {

        name:"vishwa"
    }   
    console.log(obj.name);
}catch(err){
    console.log("exception handled");
    
}finally{
    console.log("i will always execute");
}