//  read from an external fle module
//  importy an inbuilt module

const fs = require("fs")
console.log(typeof fs);


console.log("Before starting to read");
const content = fs.readFileSync("input.txt")
// console.log(content); no prnint in the form of string
console.log("output content from in" +content);
console.log("Last line");



//reading in async way

console.log("first line ");
fs.readFile('input.txt',(err,content)=>{
    if(err){
        return console.log("error");
    }
    else{
        console.log("the content output is " +content);
    }
})
console.log("last line");


//write the code to write an external file

console.log("Before");
fs.writeFileSync("output1.txt","hello students")
console.log("After");





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//write the code to an external file
//do not make output.txt file it will make automatically
console.log("before ");
fs.writeFileSync('output1.txt',"hello students")
console.log("last");


//write file in asyn way

console.log("Before");
fs.writeFile("output2.txt","hello student",err=>{
    if(err){
        return console.log(err);
    }
    console.log("written successfully");
})
console.log("After");