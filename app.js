let playerScore = 0;
let computerScore = 0;

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

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        console.log(`It's a Tie! Both chose ${playerChoice}!`);
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Player won");
        playerScore++;
    } else {
        computerScore++;
        console.log("Computer Won");
    }
};

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

// Display scores
console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
