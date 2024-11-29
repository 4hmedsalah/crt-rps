function getComputerChoice() {
    const randomNum = Math.random();

    if (randomNum < 1 / 3) {
        return "rock";
    } else if (randomNum < 2 / 3) {
        return "paper";
    } else return ("scissors");
}

function getPlayerChoice() {
    let choice = prompt("Choose your sign!").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

function playGame() {
    // Initialize scores inside playGame
    let playerScore = 0;
    let computerScore = 0;

    // Play a single round and check winner
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            console.log(`It's a Tie! Both chose ${playerChoice}`);
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`Player won ${playerChoice} beats ${computerChoice}`);
            playerScore++;
        } else {
            computerScore++;
            console.log(`Computer won ${computerChoice} beats ${playerChoice}`);
        }
    };

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);

        // Get new choices for each round
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        // Display scores
        console.log(`Score after round ${i}: Player ${playerScore} - Computer ${computerScore}`);
    }

    // Display final scores and announce the winner
    console.log("Game Over!");
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();