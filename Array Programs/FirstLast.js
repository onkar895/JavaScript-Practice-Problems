// Get the first and last item in an array using JavaScript :

// Array 
let s = [3, 2, 3, 4, 5]
function Arr () {

  // Storing the first item in a variable 
  let first = s[0]

  // Storing the last item 
  let last = s[s.length - 1]

  // Printing output to screen
  console.log('First element is ' + first)
  console.log('Last element is ' + last)
}
Arr() // Calling the function

// Using rest operator :

const array = [1, 2, 3, 4, 5]

const [firstItem, ...rest] = array
const lastItem = rest.pop()

console.log('First item:', firstItem)
console.log('Last item:', lastItem)
