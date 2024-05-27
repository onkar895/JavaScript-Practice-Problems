// JavaScript Program to Generate a Range of Numbers and Characters

// For..in loop to generate numbers in the given range.
function generateNumber (num1, num2) {
  const result = []

  for (let i in [...Array(num2 - num1 + 1)]) {
    result.push(Number(i) + num1)
  }

  return result
}

const result1 = generateNumber(1, 8)
console.log(result1)

const startChar = 'A'
const endChar = 'G'
const result = []

for (let charCode = startChar.charCodeAt(0);
  charCode <= endChar.charCodeAt(0);
  charCode++) {
  result.push(String.fromCharCode(charCode))
}

console.log(result)
