// JavaScript Program to Find the Missing Number

const findMissingNumber = (arr) => {
  let n = arr.length + 1 // Expected length of the array including the missing number
  const sumOfFirstN = (n * (n + 1)) / 2 // Sum of the sequence of numbers from 1 to n

  let sumOfArray = 0

  for (let i = 0; i < n - 1; i++) {
    sumOfArray = sumOfArray + arr[i]
  }

  let missingNumber = sumOfFirstN - sumOfArray // The difference is the missing number
  return missingNumber
}

const arr = [1, 2, 5, 4, 6, 8, 7]
const missingNumber = findMissingNumber(arr)
console.log('Missing Number: ', missingNumber)

// Using reduce() method :
function FindMissingNumber (arr) {
  const n = arr.length + 1 // Expected length of the array including the missing number
  const totalSum = (n * (n + 1)) / 2 // Sum of the sequence of numbers from 1 to n
  const arrSum = arr.reduce((acc, num) => acc + num, 0) // Sum of the given array

  return totalSum - arrSum // The difference is the missing number
}

// Example usage:
const numbers = [1, 2, 3, 4, 6] // Array with a missing number
const MissingNumber = FindMissingNumber(numbers)
console.log('The missing number is:', MissingNumber)
