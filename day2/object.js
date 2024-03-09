const user = {
    name:"rahul",
    class:"BCA",
    ROLLNO:45

}
console.log(user);
console.log(user["name"]);

user.college  = "ratm";
user["address"] = "bhadawal"
console.log(user); 


//delete the object

delete user.country
console.log(user);

delete user['address']
console.log(user);


let person = {
    name:"ram",
    city:"gurgaon",
    coountry:"india",
    school:"svm",
    address2:{

        city:"chhata",
        vill:"bhadwakl",
        post:"chhata",
        dist:"mathura"
    },
    ROLLNO:78
    

}


console.log(person);
console.log(person.address2.city);


for(let key in person){
    console.log(key,'=>',person[key]);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));








//cloning an object using assign


const new_person = Object.assign({},person)
console.log(new_person);

const new_person_1 = Object.assign({},person,{role:"developer"})
console.log(new_person_1);








