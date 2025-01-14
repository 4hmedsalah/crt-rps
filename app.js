const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const tiesDisplay = document.querySelector("#tiesDisplay");

let playerScore = 0;
let computerScore = 0;
let ties = 0;

// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScoreDisplays() {
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    tiesDisplay.textContent = `Ties: ${ties}`;
}

// Play a single round of the game and determine the winner
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        ties++;
        updateScoreDisplays();
        return { winner: "tie", message: `It's a tie! Both chose ${playerChoice}.` };

    }

    // Check if the player wins
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        updateScoreDisplays();
        return { winner: "player", message: `You win! ${playerChoice} beats ${computerChoice}.` };
    }
    // Otherwise, the computer wins
    computerScore++;
    updateScoreDisplays();
    return { winner: "computer", message: `You lose! ${computerChoice} beats ${playerChoice}.` };
}

rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});

// Main function to play the game
function playGame() {
    let scores = { player: 0, computer: 0 };

    // // Play 5 rounds
    // for (let i = 1; i <= 5; i++) {
    //     console.log(`Round ${i}`);

    //     const playerChoice = getPlayerChoice();
    //     const computerChoice = getComputerChoice();

    // Get the result of the round
    //     const roundResult = playRound(playerChoice, computerChoice);
    //     console.log(roundResult.message);

    //     // Update scores based on the winner
    //     if (roundResult.winner === "player") {
    //         scores.player++;
    //     } else if (roundResult.winner === "computer") {
    //         scores.computer++;
    //     }

    //     // Display current scores
    //     console.log(`Current Score: Player ${scores.player} - Computer ${scores.computer}`);
    // }

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