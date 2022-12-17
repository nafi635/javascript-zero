console.log("----------------------Classes ----------------");

class CircleClass {
    constructor(radius) {
        this.radius = radius;
    }

    //Instance method
    draw() {
        console.log('Draw');
    }

    //Access out of classes
    static parse(str) {
        const radius = JSON.parse
    }
}

const circleClass = new CircleClass(1);
console.log(circleClass);

const Bircle = function() {
    this.draw = function() {
        console.log(this);
    }
}

const bircleObject= new Bircle();
console.log(bircleObject.draw());

const draw = bircleObject.draw;
console.log(draw());

//Implementing private properties
const _radius = Symbol();
const _draw = Symbol();

class Gircle {
    constructor(radius){
        this[_radius] = radius;
    }

    [_draw]() {

    }
}

const gircleObject = new Gircle(1);

// we can call symbols like this
const key = Object.getOwnPropertySymbols(gircleObject)[0];
console.log(gircleObject[key]);

//Private variables implementation using weakmaps

const _circleradius = new WeakMap();
class CircleD {
    constructor(radius) {
        _circleradius.set(this,radius);   // Setting radius to the weakmap
    }

    draw() {
        console.log(_radius.get(this));
    }
}

const circleD = new CircleD(1);


//Getters and setters
const _width = new WeakMap();

class Rect {
    constructor(width) {
        _width.set(this, width);
    }

    get width(){
        _width.get(this);
    }

    set width(value){
        _width.set(this,value);
    }
}


//Inheritance using ES6
//extends keywod

class Shapes {
    constructor(size) {
        this.size = size;
    }

    move() {
        console.log('moving');
    }
}

class FirstShape extends Shapes {

    // If you only call constructor, must call super constructor in derived class before accessing this
    // constructor(){
       
    // }

     constructor(size){
       super(size);
     }

    draw() {
        console.log('drawing');
    }
}

const firstShape = new FirstShape(10);
console.log(firstShape);


class FirstShapes {
    move() {
        console.log('move');
    }
}

class SecondShape extends FirstShapes {
    move() {  // Child class method will be executed, kind of Method overriding
        super.move(); // if u still want to apply super class move method
        console.log("Second Shaeps moves ")
    }
}

const secondShape = new SecondShape();
console.log(secondShape.move());
