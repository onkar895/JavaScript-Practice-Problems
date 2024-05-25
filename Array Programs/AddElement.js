// Add new elements at the beginning of an array using JavaScript

// Using the Array unshift() method. This method is similar to the push() method but it adds an element at the beginning of the array. 
let Arr = [1, 2, 3, 4, 5]

console.log(`Array Elements Before 
            adding the element at 
            start: ${Arr}`)

function myArr () {
  Arr.unshift('6')
  console.log(`Array Elements After 
                adding the element at 
                start: ${Arr}`)
}

myArr()

// Using spread operator :

let arr = [66, 85, 19, 7]
console.log(`Array Elements Before
             element addition: 
             ${arr}`)
arr = [34, ...arr]
console.log(`Array Elements After
             element addition: 
             ${arr}`)

// Using Concat() method :

const arr1 = [23, 45, 12, 67]
console.log(`Array Elements Before
             element addition: 
             ${arr1}`)

console.log(`Array Elements After
             element addition: 
             ${[32].concat(arr1)}`)

// insert an item into array at specific index in JavaScript

let arr2 = [5, 6, 8, 10]

let index = 3
let element = 80

arr2.splice(index, 0, element)
console.log(arr2)

function insertElement () {
  let arr = [1, 2, 3, 4, 5]
  let index = 2
  let element = -99

  // Shift all elements one place
  // to the back until index
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1]
  }

  // Insert the element at the index
  arr[index] = element

  console.log(arr)
}

insertElement()
