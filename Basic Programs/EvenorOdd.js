// JavaScript Program to Check if a Number is Odd or Even :

let num = 12

if (num % 2 == 0) {
  console.log(num + ' ' + 'is an even number')
} else {
  console.log(num + ' ' + 'is an odd number')
}

// Another Approach
const evenorodd = (num) => num % 2 == 0 ? `${num} is an even number` : `${num} is an odd number`

let result = evenorodd(19)
console.log(result)
