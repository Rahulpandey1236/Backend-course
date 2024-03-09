// let add = (a,b) =>{
// return a+b;
// }

exports.prod = (a,b)=>{
    return a*b;
}

exports.name = ()=>{
    console.log("rahul pandey");
}

// module.exports=add  two exports only one method we cant not run two method by using thhis bcz it will override another function




//to export more than one qwe use in object format like that
// module.exports = {
// add:add,
// prod:prod,
// name:name
// }


//we can export function like this also

exports.loop = () =>{
    for(let i=0;i<5;i++){
        console.log("rahul");
    }
}
