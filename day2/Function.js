function hellostudents(){
    console.log("hello students");
}

hellostudents()

function sum(a,b){
    return a+b;
}

// let res = sum(3,4)
// console.log(res);
console.log(sum(6,7));

function add (a,b=7){ //Default value concept in js 
    console.log(a+b);
}

add(3);

function func (){
console.log(arguments);//this is arguments object
}
func(1,2,3,4,5,6,6,7)



