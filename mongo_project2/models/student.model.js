/* define the schema of students of collection to be stored in the db    */


const mongoose = require('mongoose')


//schema

const studentschema = new mongoose.Schema({
    name:String,
    age:Number
})


//Go ahead and create corresponding collection in db

module.exports = mongoose.model("student",studentschema) //now this file become a module and can be called from anywhere in the projects


