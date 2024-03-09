const http = require('http')


//create the server
const server = http.createServer((req,res)=>{
    if(req.url == '/hello'){  //reqest to url
        res.end('hello rahul pandey') //response of the url
    }else{
        res.end("you are try to hit a wrong url")
    }
})




//server starting
server.listen(8000,()=>{   //on 8000 port no this server will start
    console.log("server is started");
})
