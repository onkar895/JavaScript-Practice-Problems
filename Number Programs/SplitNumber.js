// JavaScript Program to Split a Number into Individual Digits :

// push method :

let result = []

const NumSplit = (num) => {
  for (let i = 0; i < num.length; i++) {
    result.push(parseInt(num.charAt(i)))
  }
  console.log(result)
}

NumSplit('123456789')

// split method  :
const SplitNumber = (number) => {
  let num = number.split('')
  let result = num.map(char => parseInt(char))
  console.log(result)
}

SplitNumber('123456')
