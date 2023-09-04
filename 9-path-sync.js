const { readFileSync, writeFileSync } = require("fs")
const path = require("path")

let first = path.join('\content', 'first.txt')
let second = path.join('\content', 'second.txt')

const firstAbsolute = path.resolve(__dirname, first)
const secondAbsolute = path.resolve(__dirname, second)

const firstFile = readFileSync(firstAbsolute, "utf-8")
const secondFile = readFileSync(secondAbsolute, "utf-8")

const thirdFile  = writeFileSync('./content/result.txt',`here the result with sync: ${firstFile}, ${secondFile}`,{flag:'a'})