const sum = (num1,num2) => num1 + num2;

const pi = 3.14

class someMathObject {
    constructor(){
        console.log('object created')
    }
}

// for exports single object 
// module.export = sum

module.exports.sum = sum;
module.exports.pi = pi;
module.exports.someMathObject = someMathObject;