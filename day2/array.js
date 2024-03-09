const { log } = require("console");

let arr = [1,2,3]
console.log(typeof arr);//mutable wich can be changed

arr1 = new Array()
console.log(typeof arr1);
console.log(arr1);



arr2 = [1,2,3,4,5,6,7,8,9]
console.log(arr2[0]);
console.log(arr[-1]);


let arr3 = [1,2,3,4,5,6,7,8,9]
console.log(arr3);
arr3.push(10)
console.log(arr3);

arr3.pop()
console.log(arr3);

arr3.shift()
console.log(arr3);

arr3.unshift(0)
console.log(arr3);

//concat in aray

let a =["ram","rahul","krishna"]
let b= ["kumkum","shivanya","santoshi"]

let c= a.concat(b)
console.log(c);


//size of arry

console.log(a.length);



//convert array into string
//join method
cha_arr = ['r','a','h','u','l']
cha_ar2 = cha_arr.join();
console.log(typeof cha_ar2);
console.log(cha_ar2);
console.log(cha_arr.join(""));
console.log(cha_arr.join("$"));
console.log(cha_arr.toString());//this also convert array to string


//slice --> same as string method 

//splicing => which modifies the given array 
//it modify the original array
let numbers = [1,2,3,4,5]
let removed = numbers.splice(2,2);
console.log(removed);
console.log(numbers);


let num2 = [1,2,3,4,5,6]
let removed2 = num2.splice(2,2,9,8,7)
console.log(removed);
console.log(num2);




//reverse a given array
let nums4  = [4,1,5,7,9]
nums4.reverse()
console.log(nums4);



//indexof
let nums5= [1,2,3,4]
console.log(nums5.indexOf(2));


//sorting of the array
arr5 = [5,6,1,2,3,4]
arr5.sort()
console.log(arr5);

arr6 = [15,40,1,13,2]//this will not sort by using sort method
//arr6.sort() =>
arr6.sort((a,b) => (a-b));
arr6.sort((a,b) => (b-a));
console.log(arr6);


//




