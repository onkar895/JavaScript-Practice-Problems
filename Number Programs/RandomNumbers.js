// JavaScript Program to Generate Random Number in Given Range :

// Function to generate random number
function randomNumber (min, max) {
  min = Math.ceil(min) // Ceil (ceiling) function rounds a number up to the nearest integer. For example, ceil(3.14) would be 4, as it rounds up to the nearest whole number.
  max = Math.floor(max) // Floor function rounds a number down to the nearest integer. For example, floor(3.14) would be 3, as it rounds down to the nearest whole number.
  return Math.floor(Math.random() * (max - min + 1)) + min // Using Math.random() to generate a random fractional number between 0 (inclusive) and 1 (exclusive). Then, multiplying it by the difference between max and min (inclusive) and adding min to it to shift the range to the desired interval.
}

console.log('Random Number between 1 and 20: ')

console.log(randomNumber(1, 20))
