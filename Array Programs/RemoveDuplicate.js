// Remove Duplicate Elements from JavaScript Array :

// Using Filter Method :

let arr = ['apple', 'mango', 'apple',
  'orange', 'mango', 'mango']

// The filter method is used to create a new array "remove" that contains only the unique elements from "arr."
const remove = arr.filter((item, index) => arr.indexOf(item) === index)
console.log(remove)

// Using set method :

let arr1 = [2, 5, 7, 2, 8, 7, 5]

function removeDuplicates (arr1) {
  return [...new Set(arr1)]
}

console.log(removeDuplicates(arr1))

// Using forEach method :

let Arr = [300, 500, 200, 600, 300, 500, 1000, 250, 600]

let unique = []
Arr.forEach(element => {
  if (!unique.includes(element)) {
    unique.push(element)
  }
})
console.log(unique)
