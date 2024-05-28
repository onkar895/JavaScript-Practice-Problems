// Merge two arrays and remove duplicate items in JavaScript :

let arr1 = [1, 2, 3, 2, 5]
let arr2 = [6, 7, 10, 9, 10]

let arr = [...arr1, ...arr2]
console.log(arr) // Merged array

let removeD = [...new Set(arr)]
console.log(removeD) // removed duplicates
