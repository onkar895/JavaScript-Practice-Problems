// Find if two arrays contain any common item in Javascript :

// Method 1: Brute Force approach using JavaScript loops

// Compare each and every item from the first array to each and every item of the second array.
// Loop through array1 and iterate it from beginning to end.
// Loop through array2 and iterate it from beginning to end.
// Compare each and every item from array1 to array2 and if it finds any common item then return true otherwise return false.

// Declare two array
let array1 = ['a', 'b', 'c', 'd']
let array2 = ['k', 'x', 'z']

// Function definition with passing two arrays
function findCommonElement (array1, array2) {

  // Loop for array1
  for (let i = 0; i < array1.length; i++) {

    // Loop for array2
    for (let j = 0; j < array2.length; j++) {

      // Compare the element of each and
      // every element from both of the
      // arrays
      if (array1[i] === array2[j]) {

        // Return if common element found
        return true
      }
    }
  }

  // Return if no common element exist
  return false
}

console.log(findCommonElement(array1, array2))

// Using Array.some() method :

function haveCommonItems (arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

// Example usage
const array3 = ['a', 'b', 'c', 'd', 'e']
const array4 = ['f', 'g', 'c']
const result = haveCommonItems(array3, array4)
console.log(result); // Output: true
