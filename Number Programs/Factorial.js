// Factorial of a number using JavaScript :

let n = 5

function factorial (n) {
  let ans = 1

  if (n === 0)
    return 1
  for (let i = 2; i <= n; i++)
    ans = ans * i
  return ans
}

console.log(factorial(n))

// Recursive method :

const fact = (num) => {
  if (num === 0) {
    return 1
  }else {
    return num * fact(num - 1)
  }
}

console.log(fact(6))
