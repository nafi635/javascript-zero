console.log("-----------------------------Control Flow -----------------------");

let hour = 10;
if(hour >= 6 && hour <12 ){
    console.log('Good morning');
}
else if(hour >= 12 && hour <18){
    console.log('Good Afternoon');
}
else {
    console.log('Good night');
}


//Switch case 
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  for(let i=0;i<5;i++){
    console.log("hello World 5 times");
 }

 //WHile and Do while loop (Statement execueted at least once)
 j=0;
 while(j<5) {
    console.log("Hello world 5 times");
    j++;
 }

//Infinite loops 
// let i=0;
// while(i<5)
// {
//     //print something
// }
// while(true) {
    // print something
//}

const man = {
    name: 'nafi',
    age: 30
}

for(let key in man){
    console.log(key);
}

const colorsList = ['red','green','blue'];
for( let index in colorsList) {
    console.log(index, colorsList[index]);
}


//ES6 advanced version for in to (For Of)
const colorsListOf = ['red','green','blue'];
for( let color of colorsListOf) {
    console.log(color);   // Here we direct get an element
}

//Break and continue
console.log("Driver going in 90 speed");
checkSpeed(90);
function checkSpeed(speed) {
    const speedLimit = 70;
    if(speed <= speedLimit){
        console.log('ok');
    }
     else {
        const points = Math.floor((speed - speedLimit));
        if(points >= 12){
            console.log("Your speed limit too high, License Suspended");
        } 
        else {
            console.log("Points", points);
        }
     }
}
const Movie = {
    name : 'RRR',
    rating: 8.5,
    director: 'Rajmouli',
    collections: 1000
}

showStringProperties(Movie);

function showStringProperties(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'string'){
            console.log(key,obj[key]);
        }
    }
}

showStars(8);
function showStars(rows) {
    for(let row=1;row<=rows; row++) {
        let pattern = '';
        for(let i=0;i<row;i++) {
            pattern += 'x';
        }
        console.log(pattern);
    }
}
