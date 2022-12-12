let radius = 1;

const circle = {
    radius:1,
    location: {
        x: 1,
        y: 1
    },
    isVisible : true,
    draw : function() {
        console.log("Drawing the circle");
    },
    move : function() {
        console.log("Moving the circle");
    }
}

circle.draw();
circle.move();

// Factory funtion that creates an object direclty by returning object instead of creating an "new" (constructor functions)
function createRecatangle ( breadth, width) {
    return {
        breadth: breadth,
        width: width,
        area: function() {
            return breadth * width;
        }
    }
}


//Constructor functions  - this keyword and new
const rectangleObject = createRecatangle(10,11);
console.log("Rectanlge area",rectangleObject.area());
;

function Circle(radius) {
    this.circleRadius = radius;
    this.draw = function() {
        console.log('drawing a circl in a constructor');
    }
}

const circleObject =  new Circle(1);
console.log(circleObject.draw);


Circle.call({},1);

//Primitive types and Reference types
//Reference types - Objects arrays functions

//Enumerating in an object

for (let key in circle) {
    console.log(key, circle[key]);
}

//For Of generally does'nt work for objects, but we can make convert object into array first
for (let key of Object.keys(circle)) {
    console.log(key, circle[key]);
}

if('radius' in circle) {
    console.log("Radius property there in circle");
} 


//Cloning an object
const anotherCircle = {}
for(let key in circle){
    anotherCircle[key]=circle[key];
}

console.log(anotherCircle);

//Object. assign method directly cloning an object
const another = Object.assign({}, circle);
console.log(another);


//Using spread operator
const anotherObject = { ...circle };
console.log("Anothehr object cloned by spread operator", anotherObject); 

//Garbage collector
//Javascript same as Java - Automatic garbage collector


// Built in objects
//Math object
const maxNumbe= Math.max(1,3,4,5);
console.log("Max number "+ maxNumbe);

//String Object
const stringone =new String("  Hi how are you  ");
console.log("String functions " +stringone.trim())

//Esacape Notations
console.log("This is \' single quoted");
console.log("This is \n new lined quoted");


//Template literals - we use the backtick ( ` ) character to print exactly same to the printer
const templateLiteralString = `Template 
literal 
whatever`;
console.log(templateLiteralString);

const nafiName = "Nafi";
const hiNafi = `Hi ${nafiName}
 how are you ? `
console.log(hiNafi);

//Date built in object
const date1 = new Date();
console.log(date1.getDay());

//Playing with address object
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

function areEqual(address1, address2) {
    return address1.street == address2.street &&
    address1.city == address2.city &&
    address1.zipcode == address2.zipcode 
}

function areSame(address1, address2) {
    return address1 === address2;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
console.log("Address equal " + areEqual(address1,address2));
console.log("Address equal " + areSame(address1,address2));  // it returns false as two different objects, two different memory