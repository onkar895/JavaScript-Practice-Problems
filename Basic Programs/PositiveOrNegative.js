// JavaScript Program to Check if a number is Positive, Negative, or Zero :

let number = -20
if (number > 0) {
  console.log('The number is positive')
}
else if (number < 0) {
  console.log('The number is negative')
}else {
  console.log('The number is zero')
}

// Another Approach
const Check = (num) => num === 0 ? 'Zero' : num > 0 ? 'Positive Number' : 'Negative Number'

let num = Check(24)
console.log(num)
