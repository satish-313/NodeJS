// Pipe is module which allow us to use readstream method and send it to source to
// destination sink just like a use of typical pipe

const fs = require('fs');

// for compress a file we use the zlib module
// the transfer steam
const zlib = require('zlib')
const gzip = zlib.createGzip();

// unzip file
const gunzip = zlib.createGunzip();


//const readStream = fs.createReadStream('./example2.txt','utf8');
const readStream = fs.createReadStream('./example5.txt.gz'); // for unzip source must be zipfile

//const writeStream = fs.createWriteStream('example4.txt');
//const writeStream = fs.createWriteStream('example5.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt'); // for uncompress fiel


/* readStream.on('data',(chunk) =>{
    writeStream.write(chunk);
}) */

// pipe need the source stream to destination stream in our case source = readSteam and destination = writeSteam
//readStream.pipe(writeStream); // above code is simpify using pipe

//readStream.pipe(gzip).pipe(writeStream)

// now we do the revese the method souce is gz type file into the utf8 type txt file
readStream.pipe(gunzip).pipe(writeStream)

