// JavaScript Program to Find the Sum of Natural Numbers :

const n = 6

let sum = 0

for (let i = 1; i <= n; i++) {
  sum = sum + i
}
console.log(`The sum of first ${n} natural numbers is : ${sum}`)

// using recursion
const sumOfNum = (num) => {
  if (num !== 0) {
    return num + sumOfNum(num - 1)
  } else return num
}

const num = 8
console.log(sumOfNum(num))
