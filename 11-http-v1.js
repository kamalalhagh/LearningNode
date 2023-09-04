const http = require("http")
console.log("Creating server ...")
const server = http.createServer((req,res)=>{
    res.write("You are in home page!")
    res.end()
})
server.listen(5050)
console.log("Done!")
console.log("Server started at http://localhost:5050/")