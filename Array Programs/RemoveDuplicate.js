// Remove Duplicate Elements from JavaScript Array :

// Using Filter Method :

let arr = ['apple', 'mango', 'apple',
  'orange', 'mango', 'mango']

function removeDuplicates (arr) {
  const remove = arr.filter((item,
    index) => arr.indexOf(item) === index)
  return remove
}

console.log(removeDuplicates(arr))

// Using set method :

let arr1 = [2, 5, 7, 2, 8, 7, 5]

function removeDuplicates (arr1) {
  return [...new Set(arr1)]
}

console.log(removeDuplicates(arr1))
