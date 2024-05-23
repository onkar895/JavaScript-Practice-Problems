// JavaScript Program to Find the Factors of a Number :

let n = 12
console.log(`Factors of ${n} are :`)
for (let i = 1; i < n; i++) {
  if (n % i == 0) {
    console.log(i)
  }
}
console.log(n)

const fact = (num) => {
  console.log(`Factors of ${num} are :`)
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      console.log(i)
    }
  }
  console.log(num)
}
fact(8)
