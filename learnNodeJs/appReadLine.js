const readline = require('readline');
// readline a module take input from user just like python input to create input we have to create the
// readline interface give a name as input(your choice) and assing to stdin(just like c++) and output as stdout. in that process is the process is a global variable
const r1 = readline.createInterface({input : process.stdin,output : process.stdout});

let num1 = Math.floor((Math.random()*10) + 1);
let num2 = Math.floor((Math.random()*10) + 1);
let answer = num1 + num2;


//to ask the user we need ask question to user for that node as question method
r1.question(`What is ${num1} + ${num2}? \n`, (userInput)=>{
    //console.log(userInput) // for checking after you execute the program if write any thing to console it will print to console
    if (userInput.trim() == answer){
        //console.log("exit")
        r1.close();
    }
    else{
        r1.setPrompt('Incorret answer pls try again\n');// it set the promt Just like process the promt is avalable in node 
        r1.prompt();
        r1.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                r1.close();
            }
            else{
                r1.setPrompt(`your answer of ${userInput} is incorrent\n`);
                r1.prompt();
            }
        })
    }
});

// readline by default don't close the console we have to exit by cnt+c or .exit()

r1.on('close',()=>{
    console.log('correct!!!');
});