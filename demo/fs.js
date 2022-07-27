const fs = require('fs')
const path = require('path')



const filePath = path.join(__dirname, "test", "text.txt")
    /* fs.mkdir(path.join(__dirname, "test"), (err) => {
        if (err) {
            throw err
        }
        console.log("you have direct")
    }) */
    /*fs.appendFile(filePath, "\nI like Ukraine ", (err) => {
        if (err) {
            throw err
        }
        console.log("you have file")
    }) */
fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
        throw err
    }
    console.log(content)
        /*     const data = Buffer.from(content)
            console.log("Content:", data.toString()) */
})