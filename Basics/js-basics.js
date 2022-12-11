console.log("-------------------Basics of Javascript --------------------");

//This is my first javascript code
console.log("Hello world");  // All statements should be terminated with semi colon

/* Variables */
/**
 * Can't be a reserved keyword
 * Should be meaningful
 * Can't start with a number(1name)
 * Cant contain a space or hyphen
 * Are case sensitive
 */

let personName = 'Mosh';
console.log(personName);

let firstName ="Nafi", lastName = 'Mohammad';


let firstNameBestPractice ="Nafi";
let lastNameBestPractice = 'Mohammad';

/** Constants - it can't be reassigned, like final keyword in java */
const interestRate = 0.3;
// interestRate =1;
console.log(interestRate); 

/* Primitive Data types */

let name = 'Mosh';
let age = 30;
let isApprove = true;
let undefinedValue = undefined;  //not defined value
let selectedColor = null;  //To make empty of a variable


/** Objects */
//Object has properits
let person = {
    name: 'MOhammad',
    age: 30
}

console.log(person);

 //use dot representation
console.log(person.name); 

//Use bracket representaion
let selection = 'name';
person[selection] = 'Nafi'

console.log(person[selection]);   //Dynamic notation, or we can directly call person['name']

// Arrays 
let selectedColors = ['red','color'];


console.log(selectedColors);
console.log(selectedColors[0]);

selectedColors[1] ='nocolor';
console.log(selectedColors);

let differentDataTypes = ['red','color', 1, true];
console.log(differentDataTypes);
console.log(differentDataTypes.length);
greet();
greetName('John');   //Arguemnt actual value, we can pass pasas multiple values

function greet(){
    console.log('hello function');
}

function greetName(name){   // Parameter 
    console.log(name);
}
