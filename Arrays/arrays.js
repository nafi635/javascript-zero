const numbers = [3,4, -1];

function printNumbers() {
    console.log(numbers);
}

//Adding numbers to the end
numbers.push(5);
printNumbers();

//Adding numbers to the beginning
numbers.unshift(4, 5);
printNumbers();

// numbers.splice(2,0,'a','n');
// printNumbers();

//Finding in an array - Index, indexof, lastindex of , 
//includes method - just check whether array contain number
console.log(numbers.includes(2));

//Finding referrence types
const courses = [
    {id:1, firstName: 'a'},
    {id:1, firstName: 'b'},
]


//array.find, findIndex method useful for referrence types searching
const bCourse = courses.find(function(course) {
    return course.firstName === 'b';
})
console.log(bCourse);


const nums = [1,2,3];
nums.length = 0;
console.log(nums);

//concat, slice method 
numbers.concat(nums);
printNumbers();

//spread operator 
const numbersCombined = [...numbers, ...nums];
console.log(numbersCombined);

const copy = [...numbersCombined];
console.log(copy);

//Iterating an array
numbers.forEach((number,index) => console.log(index, number));

//Every method - Return boolean value true or false
const allPostive = numbers.every(function(value){
    return value >=0;
})

console.log("Numbers ", numbers);
console.log(allPostive);


//Every method - Return array value true or false

const postiveNumbersList = numbers.filter(function(value){
    return value >=0;
});

const postiveNumbersLists = numbers.filter( number => number >2);

console.log("Numbers ", numbers);
console.log(postiveNumbersList);

//Reduce method
const numbersInt = [1,2,3,4,5];


const sum = numbersInt.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0 );

console.log(sum);