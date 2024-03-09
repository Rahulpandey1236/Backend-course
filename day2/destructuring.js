//fetch the value out of array and objects and assign it to the variable

const { markAsUntransferable } = require("worker_threads");




//destructing in to array

const nums = [1,2,3]

const [a,b,c] = [1,2,3] //destructing 
console.log(a);
console.log(b);
console.log(c);


const [p,q,r] = [1,2,[3,4,5]]
console.log(p);
console.log(q);
console.log(r);



//destructing in object


const user = {
    name:"rahul",
    class:"BCA",
    ROLLNO:45,
    age:78,
    marks:{
        math:99,

        hind:89
    }

}

const {name,age,marks:{math,hind}} =user

console.log(name);
console.log(age);
console.log(math);