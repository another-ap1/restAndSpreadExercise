/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

const filterOutOdds = (...nums) => {
    const odds = nums.reduce(function(odd, val){
        if(val % 2 !== 0){
            odd.push(val);
        }
        return odd;
    }, []);
    return odds;
  }

  Refactor this code to use the rest operator and arrow functions 

  MY CODE BELOW   */
const filterOutOdds = (...nums) => nums.filter(val => val % 2 ===0);

//FIND MIN
const findMin = (...nums) => nums.reduce((lowest, val) => val < lowest ? val : lowest);

//MERGE OBJECTS
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

/*DOUBLES AND RETURNS ARGS
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
The function should return a new array with the original array values and all of additional arguments doubled.*/

// const doubleAndReturnArgs = (arr, ...other) => {
//   const dbl = other.map(num => num*2);
//   let merged = [...arr, ...dbl];
//   console.log(merged);
//   return merged;
// }

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]


/*SLICE AND DICE
 For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.*/

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
  const newArray = items.map(num => num);
  while(newArray.length){
    const random = Math.floor(Math.random() * newArray.length);
    const el = newArray.splice(random, 1)[0];
    return newArray;
  }
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

// const extend = (array1, array2) => {
//   console.log(array1);
//   console.log(array2);
// }

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  newObj = {...obj, key:val}
  return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  let newObj = {...obj};
  delete newObj[key];
  return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  let newObj = {...obj1, ...obj2};
  return newObj;
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  let newObj = {...obj};
  newObj[key] = val;
  return newObj;
}
