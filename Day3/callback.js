function greet(name,callback){//here callback is a function
    const greeeting = "hello" + name
    callback(greeeting)
}

function displaygreetmessage(message){
    console.log(message);
}

greet("rahul",displaygreetmessage);


//callback hell

s