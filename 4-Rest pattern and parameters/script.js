
'use strict'
const resturant = {
  name         : 'pepe pizza',
  location     : 'tripurewor',
  catagories   : ['Italian', 'pizzeria', 'vegeterian', 'organic'],
  starterMenue : ['focaccia', 'bruschetta', 'garlic', 'bread', 'caprese salad'],
  mainMenue    : ['pizza', 'pasta', 'risotto'],
  // functon expression is used inside object  to create methode.
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
  orderPasta : function (ing1, ing2, ing3){
    console.log(`your pasta is ready using ingredients ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza : function(mainIngredient, ...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};
//1. spread operator
console.log('---spread operator---');
const arr = [1, 2, ...[3,4] ];
console.log(arr);
////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////
// 2. we use rest pattern of left side like destructuring.syntax is same of spread operator
//let combine rest pattern with destructuring

console.log('----lets combine rest pattern with destructuring----');
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(other);

// 3.  ... in both side of assignment operator. using destructor and rest pattern at the same time.

console.log('-------using destructor and rest pattern at the same time---------');
const [pizza, ,risotto, ...otherFood] = [...resturant.mainMenue, ...resturant.starterMenue];
console.log(pizza, risotto, otherFood);

///////////////////////////////////////////////////////////////////////////////////////////

//.4 using rest pattern in objects
console.log('----------using rest pattren in objects');
const {sat, ...weekDays} = resturant.openingHours;
console.log(weekDays);

////////////////////////////////////////////////////////////////////////
// 4. function
console.log('-------------------using rest pattern with function---------')
const add = function(...numbers){
  //...number above  is rest parameters
  console.log(numbers);
  let sum = 0;
  for(let i =0; i < numbers.length; i++){
sum += numbers[i];
}
console.log(sum);
}
add(2,3)
add(5, 3, 7, 2);
add(5, 3, 7, 2, 5, 3, 7, 2);
const x = [23, 4, 17];
add (2, 3, ...x);
  
/////////////////////////////////////////////////

// 6. Collecting arguments in restaurant object
console.log('---Collecting arguments in restaurant object---')
resturant.orderPizza('mushroom', 'onion', 'olive', 'spinach');
// if nothing passed, collected as empty array.
resturant.orderPizza('mushroom');