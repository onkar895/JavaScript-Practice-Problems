// Reverse an array in JavaScript

// 1. Using reverse() method to reverse an array

let numbers_array = [1, 2, 3, 4, 5]

console.log('Original Array: ')
console.log(numbers_array)

numbers_array.reverse()

console.log('Reversed Array: ')
console.log(numbers_array)

// 2. Using for() loop to reverse an array

let original_array = [1, 2, 3, 4]

let reversed_array = []

console.log('Original Array: ')
console.log(original_array)

for (let i = 0; i < original_array.length; i++) {
  reversed_array.unshift(original_array[i])
}

console.log('Reversed Array: ')
console.log(reversed_array)

// 2. Using forEach and unshift method to reverse an array

let original_array1 = [1, 2, 3, 4, 5, 6]

let reversed_array1 = []

console.log('Original Array1: ')
console.log(original_array1)

// The forEach() method takes a callback function as an argument. This callback function is executed once for each element in the array.
// The forEach() method continues to iterate over each element in the original_array1 array and adds it to the beginning of the reversed_array1 array using the unshift() method.
original_array1.forEach((element) => {
  reversed_array1.unshift(element)
})

console.log('Reversed Array1: ')
console.log(reversed_array1)
