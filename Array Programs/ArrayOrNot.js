// How to check object is an array in JavaScript ?

// Using Array.isArray method :
const Arr = [2, 5, 8, 10]

const isArray = Array.isArray(Arr)
console.log(isArray) // true

const Arr1 = {
  name: 'onkar karale',
  age: 25,
  phone: 9921374887
}

const isArray1 = Array.isArray(Arr1)
console.log(isArray1) // false

// Using typeOf :

const arr = ['onkar', 'rishi', 'harshal', 'manish']

console.log(typeof (arr))
