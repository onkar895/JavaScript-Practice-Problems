// Generate Random Number
let randomNumber = Math.floor(Math.random() * 10 + 1)

// Counting the number of guesses
let guess = 1

const NumberGuess = () => {
  // Number guessed by user    
  let x = document.getElementById('guessField').value

  if (x == randomNumber) {
    alert('CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ' + guess + ' GUESS ')
  }
  /* If guessed number is greater than actual number*/
  else if (x > randomNumber) {
    guess++
    alert('OOPS SORRY!! TRY A SMALLER NUMBER')
  } else {
    guess++
    alert('OOPS SORRY!! TRY A GREATER NUMBER')
  }

  // Reset the input field
  document.getElementById('guessField').value = ''
}

document.getElementById('submitguess').onclick = NumberGuess
