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

