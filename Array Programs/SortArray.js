// Sort Numeric Array using JavaScript :

// The Array sort() method is implemented. The array is sorted as a string.
let Arr = [12, 25, 31, 23, 75, 81, 100]
console.log(Arr.sort())

// Then, how to sort number array elements?
// There are two approaches to sorting the number array in ascending order:

// Approach 1: Using Compare Function
// Approach 2: Creating Loops

// Using Compare Function :
// We can create a Compare function that returns negative, zero, or positive values. 

// Here, we will use bubble sort (a simple sorting technique) to sort the array elements in ascending order.

// Sorting function
function Numeric_sort (ar) {
  let i = 0, j
  while (i < ar.length) {
    j = i + 1
    while (j < ar.length) {
      if (ar[j] < ar[i]) {
        let temp = ar[i]
        ar[i] = ar[j]
        ar[j] = temp
      }
      j++
    }
    i++
  }
}

// Original Array
let arr = [1, 15, 10, 45, 27, 100]

// Print Before sorting array 
console.log('Original Array')
console.log(arr)

// Function call 
Numeric_sort(arr)

console.log('Sorted Array')

// Print sorted Numeric array 
console.log(arr)
