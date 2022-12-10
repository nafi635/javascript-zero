console.log("-------------------Operators -------------");

//Arithemetic operators
let x=10;
let y=12;

console.log(x+y);   //All are -- +,-, /, %, &
console.log("Power "+ (x**y));


console.log(++x); // Incremented first and prints
console.log(x++);//Prints and next incremented
console.log(x);

x=x+5;
x+=5; //Additional assignemnt operators
x*=5; //Multiplication and assignment operators

//Assignment operators
//Relational
console.log(x>0);
console.log(x>=1);
console.log(x<1);


//Strict operators
console.log(x === 1);
console.log(x !== 1);


//Two equality operators 1) Loose eqality operators 2) Strict equality operators

//Ternary operators
let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);


//Logical Operators
console.log(true  && true); //Logical AND operator
 //Logical OR (||) operator
//Logical NOT operator
console.log(!true); 

//False operators and truthy 
console.log(false || true);
console.log(false || 0);
console.log(false || 'MOsh');

console.log('reareeaed' || 'MOsh');


//Bitwise operators - it is binary operators logic
console.log(1 & 2);
console.log(1 | 2);