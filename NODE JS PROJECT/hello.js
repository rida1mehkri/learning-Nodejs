console.log("HEllo from Rida")

const myname = 'Rida'
console.log(myname)

const files = require("fs")
files.writeFileSync("output.txt","Just wrote a txt file")
console.log("check explorer")

const files2 = require("fs")
files2.writeFileSync("output2.tct", "new file")

files2.unlinkSync("output2.tct")

const chalk = require("chalk")
console.log(chalk.green("This txt is green"))