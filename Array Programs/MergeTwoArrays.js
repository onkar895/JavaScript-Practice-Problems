// Merge two arrays and remove duplicate items in JavaScript :

let arr1 = [1, 2, 3, 2, 5]
let arr2 = [6, 7, 10, 9, 10]

// Using Spread Operator and Set() Object :
let arr = [...arr1, ...arr2]
console.log(arr) // Merged array

let removeD = [...new Set(arr)]
console.log(removeD) // removed duplicates

// Using concat() Method and Set() Object
let arr3 = [1, 2, 3, 4, 5, 6]
let arr4 = [3, 4, 5, 7]
let Arr = arr3.concat(arr4)
let mergedArr = [...new Set(Arr)]
console.log(mergedArr)
