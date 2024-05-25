// Sum of all elements of a given array in JavaScript :

// Using for loop :
let Arr = [1, 2, 3, 4, 5, 6]

let sum = 0

for (let i = 0; i < Arr.length; i++) {
  sum += Arr[i]
}

console.log('Sum is', sum)

// using foreach :

let arr = [2, 3, 4, 5]

let sum1 = 0

arr.forEach(num => {
  sum1 += num
})

console.log('Sum is', sum1)
