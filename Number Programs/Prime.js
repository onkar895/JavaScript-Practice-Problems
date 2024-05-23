// Check a number is Prime or not using JavaScript :

// Function to check prime number

function checkPrime (num) {
  let isPrime = true
  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      isPrime = false
      break
    }
  }
  if (isPrime)
    console.log(num + ' is a prime number')
  else
    console.log(num + ' is not prime number')
}
checkPrime(5)
checkPrime(6)

// Another Approach
function isPrime (num) {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

// Test the function with some example numbers
const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

testNumbers.forEach(num => {
  console.log(`${num} is prime: ${isPrime(num)}`)
})

// Prime numbers between 1 to 20
function isPrime (num) {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

function findPrimesInRange (start, end) {
  const primes = []
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      primes.push(num)
    }
  }
  return primes
}

const start = 1
const end = 20

const primeNumbers = findPrimesInRange(start, end)
console.log('Prime numbers from', start, 'to', end, 'are:', primeNumbers)
