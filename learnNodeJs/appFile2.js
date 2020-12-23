// these program for how to work with the folder

const fs = require('fs');

/* // create a folder
// it take the two arrgument first one = about the creating dir name, second the callback function
fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('sucessfully create the folder name tutorial')
    }
})
 */


/* // delete the folder or dir
// it take two arrguments first one = dirname , error call back
fs.rmdir('tutorial',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('file is successfully delete')
    }
}) */


/* fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        fs.writeFile('./tutorial/example.txt','write anything',(err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log('succefully complete task')
            }
        })
    }
}) */

/* // remove the directory having a file in that but we know rmdir delete only the empty file first we 
// have to delete the file on dir and then rmdir the dir

fs.unlink('./tutorial/example.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('delete the file')
    }
})

fs.rmdir('tutorial',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('dir delete')
    }
})
 */

/* // what if file has multiple file in it
// first read the dir and file

// readdir take 2 parameter first = dir name, second = callback of(err, all file in that dir)
fs.readdir('example',(err,files)=>{
    if(err){
        console.log(err)
    }
    else{
        //console.log(files) for the showing file
        // loop throught and delete
        for (let file of files){
            fs.unlink('./example/'+ file,(err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log('successfully deleted file')
                }
            })
        }
    }
}) */

fs.rmdir('example',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('dir delete')
    }
})