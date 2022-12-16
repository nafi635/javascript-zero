console.log("--------------------------Functions ----------------");
//Function Declrations
function walk() {
    console.log('walking function');
}

walk();

//Function Expression because in javascript functions are objects
let run = function() {};

//Anonymus function 
let runFunction = function() {
    console.log("Running");
}

runFunction();

//arguments is build in function
function sumOfNumbers(a,b) {
    let total = 0;
    for(let value of arguments) {     // We can completely get arguments directly with arguments object without passing anything
        total += value;
    }
    return a+b;
}

console.log(sumOf(1,2,34,5));  // We can have any number of arguments 


//The rest operator  - Along with parameter function -
// gets all parameters ( Can pass varying number of parameters)
//Rest parameter must be last parameter

function sumOf(...args) {
    console.log(args);
}

//Default values - if you don't pass the arguments, default values will be taken
//Even you passed the undefined, it takes default value
function interestCalculate(principle, rate =3.5, years = 5) {
    return principle * rate / 100 * years;
}

console.log(interestCalculate(1000));

//Getters and setters
const student = {
    firstName : 'mosh',
    lastName : 'Hamedani',
    get fullName() {
        return `${student.firstName} ${student.lastName}`;
    },

    set fullName(value) {
        if(typeof value!=='string')
            throw new Error('Value is not a string');   // Throwing an exception
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

student.fullName = 'John Smith';
console.log(student);

try {
    person.fullName = null;
} 
catch(e) {
    alert(e);
}

//Local & Global Scope
function start() {
    const message = 'hi';

    if(true) {
        const another = 'bye';
    }

    for(let i=0;i<5;i++) {
        console.log(i);
    }

    //console.log(i);  // we get the reference error
}

this.start();