const mongoose = require('mongoose')

const studentModel = require('./models/student.model1');

mongoose.connect('mongodb://localhost/be_mongo')

const db = mongoose.connection


db.on("error",()=>{
    console.log("erroe while connection to db");
   
});

db.once("open",()=>{
    console.log("connect to database");
     //logic to insert data into db
     init()

     //running the queries on mongo database
     dbQueries()
})


async function init(){
    const student = {
        name:"rahul",
        age:19,
        email:"pandeyrahul8218@gmail.com",
        subject :["maths","hindi"]

    }

    const std_obj = await studentModel.create(student)
    console.log(std_obj);
}



async function dbQueries(){
    // write the logic to read the data of students data


    console.log("inside the db queries function");


    //read the student data based on the id 
    try{

        const student = await studentModel.findById("65d8c09e38bc2bccc2d9543d")
        console.log(student);
    }catch(err){
        console.log(err);
    }
    

    //search based on name
    try{
    //  const students = await studentModel.find({name:"rahul"})
    const students = await studentModel.findOne({name:"rahul"})
     console.log(students);
    }catch(err){
        console.log(err);
    }


    //deal with the multiple conditions
    const students = await studentModel.where("age").gt("10").where("name").equals("rahul").limit(2)
    console.log(students);

    //delete one records where name = "rahul"

    const student = await studentModel.deleteOne({name:"rahul"})

    console.log(student);


    

}