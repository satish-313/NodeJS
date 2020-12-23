// importing event by using require for other language uses import like import numpy

const EventEmitter = require('events');
const { clearScreenDown } = require('readline');
// creating a instance of event
const eventEmitter = new EventEmitter();

// now i have event emitter object lets attach an event listners
eventEmitter.on('tutorial', ()=>{
    console.log('tutorial event has occurred');
}); // on method of eventEmitter take 2 parameter first one is event and second one is function that active when first event take place

// if we execute the code now it show no output result in bash. for above code to executes we emit or call an event of name tutorial
eventEmitter.emit('tutorial') // in that emit invoces the tutorial event


// make an event it take a parameter

eventEmitter.on('sum',(num1,num2) =>{
    console.log(num1 + num2);
});

eventEmitter.emit('sum',1,2); // after the function the parameter are place to take by functions


// in node we can make a custome event emit by inheritance of object property like any othe object orienting language property

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('pedro');
let karina = new Person('karina');

karina.on('name',()=>{
    console.log('my name is '+ karina.name)
});

pedro.on('name',()=>{
    console.log('my name is '+ pedro.name)
});

pedro.emit('name');
karina.emit('name')
