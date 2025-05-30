// The fs module in Node.js stands for File System, and it's used to interact with the file system on your computer—like reading, writing, updating, or deleting files and directories.

const fs = require("fs")

// writeFile
// 1] sync..
// fs.writeFileSync("./test.txt","hello world")
// 1] Async..
// fs.writeFile("./test.txt","hello world  Async",(err)=>err)

// readFile
// const result = fs.readFileSync('./contact.txt',"Utf-8")
// console.log(result)

//   fs.readFile('./contact.txt',"Utf-8",(err,res) =>{
//     if(err) console.log(err)
//     else{ console.log(res) }

//  })

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())

fs.cpSync("./test.txt", "./cpTest.txt")

fs.unlinkSync("./cpTest.txt")
// const res = fs.statSync("./test.txt").isFile()
// const res = fs.statSync("./test.txt")

fs.mkdirSync("my-doc/folderA/folderB",{ recursive: true })

// console.log(res)