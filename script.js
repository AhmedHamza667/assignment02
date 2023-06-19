const arr = [1, 5, 7, 20, 30, 40, 50, 1, 60, 70, 42];
const nums = [0, 2, 3, 7, 8, 0, 95, 0, 15];
const Workers = {
    name: "Ahmed",
    age: 21,
    city: "Staten Island",
    state: "NY"
};
function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}


function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}


function myFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)){
            result.push(callback(arr[i], i, arr)); 
        }
    }
    return result;
}
function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {  //if some greater than 100
            return true;
        }
    }
    return false;
}


function myEvery(arr, callback) {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {  
            result = false;
        }
    }
    return result;
}
function myReduce(arr, callback) {
    let accumulator = arr[0];
    for (let i = 1; i < arr.length; i++) {
        accumulator = callback(accumulator ,arr[i], i, arr);
    }
    return accumulator;
}
function myIncludes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
function myPush(arr, target) {
    arr[arr.length] = target;
}
function myUnshift(arr, target) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            index = i;
        }
    }
    return index;
}



//callback functions
function consoleLog(num, i, arr) {
    console.log(`Element at index ${i} is ${num}`);
}
function square(num, i, arr) {
    return num * num;
}
function double(num, i, arr) {
    return num * 2;
}
function even(num, i, arr){ // return even
    if (arr[i] % 2 === 0) {          
        return arr[i];
    }
}

function odd(num, i, arr){ //return odd
    if (arr[i] % 2 === 1) {          
        return arr[i];
    }
}
function greaterThan100(num, i, arr) {
    if (arr[i] > 100){
        return true;
    }
}
function lessThan100(num, i, arr) {
    if (arr[i] < 100){
        return true;
    }
}
function sum(accumulator ,num, i, arr) {
    return accumulator + num;
}
function product(accumulator ,num, i, arr) {
    return accumulator * num;
}


// console.log(myEach(arr, consoleLog));
// console.log(myMap(arr, square));
// console.log(myMap(arr, double));
// console.log(myFilter(arr, even));
// console.log(myFilter(arr, odd));
// console.log(myEvery(arr, lessThan100));
// console.log(myReduce(arr, sum));
// console.log(myReduce(arr, product));
// console.log(myIncludes(arr, 100));
// console.log(myIndexOf(arr, 1));
// console.log(myIndexOf(arr, 50));
// console.log(myUnshift(arr, 1));


function grabKeys(obj){
    let keys= [];
    for (let i in obj){
        if (obj.hasOwnProperty(i)){
            keys.push(i);
        }
    }
    return keys;
}
function grabValues(obj){
    let keys= [];
    for (let i in obj){
        if (obj.hasOwnProperty(i)){
            keys.push(obj[i]);
        }
    }
    return keys;
}


function moveZeros (nums) {
    let i = 0; // Pointer for non-zero elements
    let j = 0; // Pointer for iterating through the array

  while (j < nums.length) {
    if (nums[j] !== 0) {
      // Swap non-zero element with the current i position
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }
}
function range(start, end, step = 1) {
    let arr = [];
  
    if (start <= end && step > 0) {
      for (let i = start; i <= end; i += step) {
        arr.push(i);
      }
    } else if (start >= end && step < 0) {
      for (let i = start; i >= end; i += step) {
        arr.push(i);
      }
    }
  
    return arr;
  }
  
  function sum(arr) {
    let total = 0;
    for (let num of arr) {
      total += num;
    }
    return total;
  }
  

  function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  
  function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    let node = list;
    while (node !== null) {
      array.push(node.value);
      node = node.rest;
    }
    return array;
  }
  
  function prepend(value, list) {
    return { value: value, rest: list };
  }
  
  function nth(list, index) {
    if (list === null) {
      return undefined;
    } else if (index === 0) {
      return list.value;
    } else {
      return nth(list.rest, index - 1);
    }
  }
  

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
  
    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
      return false;
    }
  
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
  
    return true;
  }
  
  let obj = { here: { is: "an" }, object: 2 };
  
//   console.log(deepEqual(obj, obj));  
//   console.log(deepEqual(obj, { here: 1, object: 2 }));  
//   console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
  
//   console.log(arrayToList([10, 20]));  
//   console.log(listToArray(arrayToList([10, 20, 30])));  
//   console.log(prepend(10, prepend(20, null)));  
//   console.log(nth(arrayToList([10, 20, 30]), 1));
  
  //console.log(reverseArray(["A", "B", "C"])); 
//   let array = [1, 2, 3, 4, 5];
//   reverseArrayInPlace(array);
//   console.log(array);
  
// console.log(grabKeys(Workers));
// console.log(grabValues(Workers));
// console.log(nums);
// moveZeros(nums);
// console.log(nums);
//console.log(sum(range(0, 100, 10)));
