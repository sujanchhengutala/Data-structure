'use strict'
// unpacking  all array element into one


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
  }
};

//expand an array to all its element in one single array.
//1. traditional approach 
//console.log('---------------using tradiotional approach--------------');
//const arr = [7, 8, 9];
//create new array with some new element at begining
//loop over or do it manually
//const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
//console.log( badNewArr);
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

//2. using spread operator
//console.log('---------------using spread operator----------------------');
//const goodArr = [1, 2, ...arr];
//console.log(goodArr);
// what have to the original array?
//console.log('--------------original array---------------------');
//console.log(arr);
// 3. what if
///const newArr = [1,2,arr];
//console.log(newArr);

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// 4. getting individuals element of array
//console.log('----------getting individuals elements of array-------------');
//console.log(...goodArr);
// this is similar as
//console.log(1,2,7,8,9);
//this is use full to pass multiple elements to function as an argument

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// 5. adding another food item to mainMenue inside resturant object
//console.log('-------creating new menue fetching from resturant object------');
//const newMenue = [...resturant.mainMenue, 'rice', 'sauce'];
//console.log(newMenue);
////////////////////////////////////////////////////////////////////
//console.log('-----------original mainMenue inside resturant object---------');
//console.log(resturant.mainMenue);

// spera operator also helps to take elements outof array like destructuring but it takes all elements out of an array and also doesn'n create variable

/////////////////////////////////////////////////////////////////////////////
// 6. copying array

//console.log('------------- copying arrays-----------');
//const mainMenueCopy = [...resturant.mainMenue];
//console.log(mainMenueCopy);
/////////////////////////////////////////////////////////////////////////////
// 7. join two arrays

//console.log('--------joining arrays---------------');
//const menue = [...resturant.starterMenue, ...mainMenueCopy];
//console.log(menue);

// spread operator not only works in an array but it also works on all iterables. we will talks them later...
// iterables: array,, string, maps and sets but not objects

////////////////////////////////////////////////////////////////////////////
// 8. for strings
//console.log('--------spread operator for string-----');
//const str = 'sujan';
//console.log(...str);
//console.log('s', 'n');
//const letter = [...str, '','chhengutala'];
//console.log(letter);
/////////////////////////////////////////////////////////////////////////////

// 9. we can't add spread operator inside template literals because template literals doesnot expect multiple value seperate by commas. This can be only used when we passed argument in function and when we build new array.
// console.log(`${...str} chhengutala);
/////////////////////////////////////////////////////////////////////////////


// 10. lets now make function that utilize spread operator
 //const ingredients = [prompt('let\'s make pasta! ingredient 2'), prompt('let\'s make pasta! ingredient 2'), prompt('lets\'s make pasta! ingredient 3')];
 //console.log(ingredients);
 ///////////////////////////////////////////////////////////////////////////////////////////////////////
 //how to call order pasta function and pass enter ingredients?
 // 1. traditional approach
 //console.log('----making pasta using tradiotional approach---');
 //resturant.orderPasta(ingredients[1], ingredients[1], ingredients[2]);

 ////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 12. using spread operator 
  // console.log('-----making pasta using spread operator----);
  //resturant.orderPasta(...ingredients)
//
// 13. since 2018 spread operator also works on objects although objects are not iterables
console.log('--------spread operator with objects------------');
const newResturant = {
  shareHolder:'sujan chhengutala',  established: '2021', ...resturant};
   console.log(newResturant);

   ////////////////////////////////////////////////////////////////////////////////////////////////////
   // 14. copy the object
   //console.log('-------copying resturant objects-------');
   const resturantCopy = {...resturant};
   console.log(resturantCopy);
   ///////////////////////////////////////////////////////////////////////////////////////////////////////
   //15. checking resturantCOpy
   console.log('---checking resturant copy------');
   console.log(resturantCopy.name);
   resturantCopy.name = 'Achiver Groups pizza';
   console.log(resturantCopy.name);
   console.log(resturant.name) 
