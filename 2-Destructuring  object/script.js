'use strict'
// unpacking data inot seperate variable|
// ES6 features
// we  will simulate food delivery application

const resturant = {
  name         : 'pepe pizza',
  location     : 'tripurewor',
  catagories   : ['Italian', 'pizzeria', 'vegeterian', 'organic'],
  starterMenue : ['focaccia', 'bruschetta', 'garlic', 'bread', 'caprese salad'],
  mainMenue    : ['pizza', 'pasta', 'risotto'],
  order        : function (starterIndex, mainIndex)
  {
                 return [this.starterMenue[starterIndex], this.mainMenue[mainIndex]];
  },
                 //Adding opening hour object
  openingHours : 
  {
    thu :
    {
      open  : 12,
      close : 22,
    },
    fri :
    {
      open  : 11,
      close : 23,
    },
    sat :
    {
      open  :0,
      close :24,
    },
  },
  // 6. passing object as function argument
  
  orderDelivery :function ({
    starterIndex = 1,
    mainIndex    = 0,
    time         = '20:00',
    address
  }){
    console.log(`order recived! ${this.starterMenue[starterIndex]} and ${this.mainMenue[mainIndex]}, will be delivered to ${address} at ${time} `);
  },
};

// 1. lets take out name categories and opening hours of this resturant object
//  we will use {} for object destructuring
// variables name should exactly match the property name
// in object order of element does not matter like array

const {openingHours, catagories, name} = resturant;
//console.log(openingHours);

// if variable name is different from property name
//const {name: resName, openingHours: hours, catagories: item} = resturant;
//console.log(resName);
//console.log(hours);
//console.log(item);

// default value
//const { mainMenue: menue = [], starterMenue: starter = []} = resturant;
///console.log(menue, starter);
//--------------original object not changed-------------
//console.log(resturant);

//4. mutating variables
let a = 10;
let b = 100;
const obj =
 {
    a: 23, 
    b: 3, 
    c: 7
  };

//js identifies {} as code blocks
({a ,b} = obj);
console.log(a, b);

// 5. nested object

const {
  fri :{open, close},} = openingHours;
  console.log(open, close);
//assigning different variable
/*const
{ 
  fri     : 
  {
    open  : opening,
    close : closing
  },
} = openingHours;
console.log(opening, closing);
*/
//6. passing object as function argument
resturant.orderDelivery({time : '22:30', address : 'putalisadak, kathmandu-Nepal', mainIndex : 2, starterIndex : 2});
//calling with default values
resturant.orderDelivery({address : 'putalisadak, kathmandu-Nepal', starterIndex : 2,})


