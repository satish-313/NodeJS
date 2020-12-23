const fs = require('fs')
const { emitKeypressEvents } = require('readline')

/* // create a file
// the writefile it take three paramater first = file name, second = what inside the file ,third a callback funtion of error
fs.writeFile('example.txt','this is an example',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file succefully created');
        // fs readfile take 3 parameter just like first=file name,second=encoding type(utf-8),third = err(err take two parameter first = error and second = file data)
        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(file)
            }
        })
    }
}); */


/* // rename take the 3 parameter first = current file name,second=what you want to rename,err call back
fs.rename('example.txt','example2.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('succefully rename file')
    }
})
 */


/* // Edit the file
// append file take three parameter first = file name , second = data that have to append, callback err
fs.appendFile('example2.txt','some data being appand',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('successfully append to data file')
    }
}) */

// delete a file
// it take 2 parameter first one = file name, second = err call back
fs.unlink('example.txt', (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('successfully delete from file')
    }
})