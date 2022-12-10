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


