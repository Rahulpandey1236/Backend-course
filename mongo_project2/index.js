const mongoose = require('mongoose')

const studentModel = require('./models/student.model.js');

mongoose.connect('mongodb://localhost/be_mongo')

const db = mongoose.connection


db.on("error",()=>{
    console.log("erroe while connection to db");
   
});

db.once("open",()=>{
    console.log("connect to database");
     //logic to insert data into db
     init()
})


async function init(){
    const student = {
        name:"rahul",
        age:19
    }

    const std_obj = await studentModel.create(student)
    console.log(std_obj);
}