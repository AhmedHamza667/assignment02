const arr = [1, 5, 7, 20, 30, 40, 50, 1, 60, 70, 42];
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


console.log(myEach(arr, consoleLog));
console.log(myMap(arr, square));
console.log(myMap(arr, double));
console.log(myFilter(arr, even));
console.log(myFilter(arr, odd));
console.log(myEvery(arr, lessThan100));
console.log(myReduce(arr, sum));
console.log(myReduce(arr, product));
console.log(myIncludes(arr, 100));
console.log(myIndexOf(arr, 1));
console.log(myIndexOf(arr, 50));
console.log(myUnshift(arr, 1));


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

console.log(grabKeys(Workers));
console.log(grabValues(Workers));