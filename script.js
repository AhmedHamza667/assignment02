const arr = [1, 5, 7, 20, 30, 40, 50, 1, 60, 70, 42];

function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
function consoleLog(num, i, arr) {
    console.log(`Element at index ${i} is ${num}`);
}
function square(num, i, arr) {
    return num * num;
}
function double(num, i, arr) {
    return num * 2;
}




function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr)); //return double the array
    }
    return result;
}


function myFilter(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {  //return only even numbers
            result.push(arr[i]);
        }
    }
    return result;
}
function mySome(arr) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 100) {  //if some greater than 100
            result = true;
        }
    }
    return result;
}

// function modulo(a){
//     a % 2 === 0;
// }

function myEvery(arr) {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 100) {  //if everything greater than 100
            result = false;
        }
    }
    return result;
}
function myReduce(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
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


console.log(myEach(arr, consoleLog));
console.log(myMap(arr, square));
console.log(myMap(arr, double));

