// Convert a number into array in JavaScript :

let Num = 123456789

// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers

let str = String(Num).split('')
console.log(str)

let newArr = str.map((num) => {
  return Number(num)
})

console.log(newArr)
