const path = require("path")
console.log(path.sep)
let myPath = path.join('\content', '7-path', 'message.txt')
console.log(myPath)

const base = path.basename(myPath)
console.log(base);

const absolute = path.resolve(__dirname, myPath)
console.log(absolute)