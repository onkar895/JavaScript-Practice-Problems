// JavaScript Program to Find Largest of Three Numbers :

// Conditional
const findLargest = (num1, num2, num3) => {
  if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is greater`)
  }
  else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is greater`)
  }else {
    console.log(`${num3} is greater`)
  }
}

findLargest(77, 40, 20)

// Using Math.max() :
function findLargest1 (num1, num2, num3) {
  return Math.max(num1, num2, num3)
}

// Example usage:
const largestNumber = findLargest1(10, 5, 8)
console.log('Largest number:', largestNumber)
