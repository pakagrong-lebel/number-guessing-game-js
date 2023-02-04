// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Keep track of the number of attempts
let numberOfAttempts = 0;

// Function to prompt the player for their guess
const guessNumber = () => {
  numberOfAttempts++;
  let playerGuess = prompt(`Enter your guess (attempt ${numberOfAttempts}):`);

  // Check if the player's guess is correct
  if (playerGuess == randomNumber) {
	alert(`Correct! You took ${numberOfAttempts} attempts to guess the number.`);
  } else if (playerGuess > randomNumber) {
	alert(`Your guess is too high. Try again.`);
	guessNumber();
  } else {
	alert(`Your guess is too low. Try again.`);
	guessNumber();
  }
};

// Start the game
guessNumber();
