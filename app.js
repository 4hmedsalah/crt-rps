// Validating player input
function isValidChoice(choice) {
    return choice === "rock" || choice === "paper" || choice === "scissors";
}

// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get and validate player's choice
function getPlayerChoice() {
    let choice = prompt("Choose your sign (rock, paper, or scissors):").toLowerCase();
    while (!isValidChoice(choice)) {
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

// Play a single round of the game and determine the winner
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return { winner: "tie", message: `It's a tie! Both chose ${playerChoice}.` };
    }

    // Check if the player wins
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return { winner: "player", message: `You win! ${playerChoice} beats ${computerChoice}.` };
    }

    // Otherwise, the computer wins
    return { winner: "computer", message: `You lose! ${computerChoice} beats ${playerChoice}.` };
}

// Main function to play the game
function playGame() {
    let scores = { player: 0, computer: 0 };

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);

        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        // Get the result of the round
        const roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult.message);

        // Update scores based on the winner
        if (roundResult.winner === "player") {
            scores.player++;
        } else if (roundResult.winner === "computer") {
            scores.computer++;
        }

        // Display current scores
        console.log(`Current Score: Player ${scores.player} - Computer ${scores.computer}`);
    }

    // Display the final result
    console.log("Game Over!");
    if (scores.player > scores.computer) {
        console.log("Congratulations! You win the game!");
    } else if (scores.computer > scores.player) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();