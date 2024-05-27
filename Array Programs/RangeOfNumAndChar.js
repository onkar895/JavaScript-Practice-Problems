// JavaScript Program to Generate a Range of Numbers and Characters

// For..in loop to generate numbers in the given range.
function generateNumber (num1, num2) {
  const result = []

  for (let i in [...Array(num2 - num1 + 1)]) {
    result.push(Number(i) + num1)
  }

  return result
}

const result = generateNumber(1, 8)
console.log(result)
