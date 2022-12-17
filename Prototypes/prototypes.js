console.log("-----------------------------Prototypes--------------------------------------------")

//you can see the prototypes of every build in funtions

let objectPrototype = {};
console.log(objectPrototype);

let arrayPrototype = [];
console.log(arrayPrototype);

//Property Descriptors
let personObject = { firstName : 'nafi'};  // If u iterate keys, only the name will be shown not prototype
let objectBase = Object.getPrototypeOf(personObject);
let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');
console.log(descriptor);


//You can define properties of an object
Object.defineProperty(personObject,'firstName', {
    writable: false,
    configuratble: true,
    enumerable: true
})

for(let key in personObject){
    console.log(key);
}

function Football(radius) {
    // These are called instance members
    this.radius = radius;
}

//Prototype members
Football.prototype.draw =  function() {
    console.log('Drawing a football');
}

const footballObject = new Football();
console.log(footballObject.draw());

// If you test it hasOwnProperty() --  
Football.prototype.toString = function() {
    return "Football is a cricle "
}

console.log(footballObject.toString()); 


//Prototypical Inheritance
function Shape() {

}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function CircleSpect(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function() {
    console.log('draw');
}
//Circle.prototype = Object.create(Object.prototype);  The standard prototype will be like this
Circle.prototype = Object.create(Shape.prototype);  // Prototypical inheritance - Shape.Prototype
//Here constructor will be gone.
//Need to reset the constructor
Circle.prototype.constructor = Circle;

const s = new Shape();
const c = new Circle();

//Intermediate function to inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

//Avoid inheritance in multiple levels, strict to only one level

// Instead of inheritance, we can use composition too
const canEat = {
    eat: function() {
        this.hunger--;
        console.log("Eating");
    }
}

const canWalk = {
    walk: function() {
        console.log("Walking");
    }
}

function Animal() {
    
}

//canEat and canWalk functions mixing up with prototype
const animal = Object.assign(Animal.prototype, canEat, canWalk);

