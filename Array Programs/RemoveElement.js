// Remove elements from a JavaScript Array :

// Method 2: Remove First Element from Array using shift() Method :
// JavaScript code to illustrate shift() method
// to remove elements from array
let Arr = ['shift', 'splice', 'filter', 'pop']

// Removing the first element from array 
let shifted = Arr.shift()
console.log('Removed element: ' + shifted)
console.log('Remaining elements: ' + Arr)

// Method 2 : Remove Last Element form Array using pop() Method :
// JavaScript code to illustrate pop() function 
// to remove array elements

let arr = ['shift', 'splice', 'filter', 'pop']

// Popping the last element from the array 
let popped = arr.pop()
console.log('Removed element: ' + popped)
console.log('Remaining elements: ' + arr)
console.log('Array length: ' + arr.length)

// Method 3: Remove Element from Array at any Index using splice() Method :
// JavaScript code to illustrate splice() function 
let arr1 = ['shift', 'splice', 'filter', 'pop']

// Removing the specified element from the array 
let spliced1 = arr1.splice(1, 1)
let spliced2 = arr1.splice(1, 2)
console.log('Removed element: ' + spliced1)
console.log('Removed element: ' + spliced2)
console.log('Remaining elements: ' + arr1)

// Using the splice method to remove each element from a JavaScript array. 
// Declare and initialize array
let array = ['pop', 'splice', 'filter', 'shift']

console.log('Original array: ' + array)

// Making the length of array to 0 by using splice method
array.splice(0, array.length)
console.log('array: ' + array)
