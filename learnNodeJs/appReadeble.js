// In these module talk about the readible and writable stream more efficently 
// The efficient accomplished by reading the data by chuck instead by line by line

const fs = require('fs')

const readStream = fs.createReadStream('./example2.txt','utf8');
const writeStream = fs.createWriteStream('./example3.txt');

readStream.on('data',(chuck)=>{
    //console.log(chuck)
    writeStream.write(chuck)
})

// the adventage of using the stream it can write a file without fully load first because of chucks

// if we use the more traditional fs.readfile it use the buffer to read in that case if a file has 
// more then buffer size memory it can't read the file for example of size of 2 gb or more

