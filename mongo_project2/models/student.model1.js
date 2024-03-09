//validation and cheks in while storing data

/* define the schema of students of collection to be stored in the db    */


const mongoose = require('mongoose')


//schema

const studentschema = new mongoose.Schema({
    name:{

        type:String, // these type and required are constraints both are required
        require:true //
    },
    age:{
        type:Number,
        min:19
    },


    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:15
    },

    subjects: [String],
   
    

},{versionKey:false ,timestamps : true})


//Go ahead and create corresponding collection in db

module.exports = mongoose.model("student",studentschema) //now this file become a module and can be called from anywhere in the projects


