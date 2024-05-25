// Check whether an array includes a particular value or not in JavaScript :

// using For loop :
let fruits_array = [
  'mango',
  'banana',
  'apple',
  'pineapple',
  'pomegranate',
  'orange'
]

let valueChecker = (value) => {
  for (let i = 0; i < fruits_array.length; i++) {
    let current_value = fruits_array[i]
    if (value === current_value) {
      return value + ' is present at index: ' + i
    }
  }
  return value + ' is not included in this array..'
}

console.log(valueChecker('apple'))
console.log(valueChecker('app'))
console.log(valueChecker('banana'))

// Using includes() method :

let fruits_array1 = [
  'mango',
  'banana',
  'apple',
  'pineapple',
  'pomegranate',
  'orange'
]

let value_1 = 'apple'
let value_2 = 'app'
console.log(fruits_array1.includes(value_1))
console.log(fruits_array1.includes(value_2))
