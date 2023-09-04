const http = require("http")
console.log("Creating server ...")
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("You are in Home page") 
    }
    if(req.url==='/about'){
        res.end("You are in about") 
    }
    res.end("Sorry this url does not exist!")
})
server.listen(5050)
console.log("Done!")
console.log("Server started at http://localhost:5050/")