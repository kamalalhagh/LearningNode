const {readFile,writeFile}= require("fs")

readFile("./content/first.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const file1 = result
    readFile("./content/second.txt","utf8",(err,result)=>{
        
        const file2 = result
        writeFile("./content/result.txt",`Here the result with no-sync: ${file1}, ${file2}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("Done!")
        })
    })
})
