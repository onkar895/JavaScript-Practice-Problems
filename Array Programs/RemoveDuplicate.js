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
