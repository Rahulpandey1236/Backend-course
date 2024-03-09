const http = require("http")


//create the server

const server = http.createServer((req,res)=>{
    if(req.url == '/hello'){
        res.end('hello rahul ji')
    }
    else{
        res.end("you are try to hit wrong url")
    }
})

server.listen(8003,()=>{
    console.log("server is starting");
})
