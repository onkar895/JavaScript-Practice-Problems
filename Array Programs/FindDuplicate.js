// JavaScript Program to Find Duplicate Elements in an Array

// Using Nested for-In loop

let check_duplicate_in_array = (input_array) => {
  let duplicate_elements = []
  for (num in input_array) {
    for (num2 in input_array) {
      if (num === num2) {
        continue
      }else {
        if (input_array[num] === input_array[num2]) {
          duplicate_elements.push(input_array[num])
        }
      }
    }
  }
  return [...new Set(duplicate_elements)]
}
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1]
console.log(check_duplicate_in_array(arr))
