var fs = require('fs')

var data = fs.readFileSync('components.txt')

console.log(data.toString())
console.log('program ended')

