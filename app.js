const choices = document.querySelector("#choices");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const tiesDisplay = document.querySelector("#tiesDisplay");
const updates = document.querySelector("#updates");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

// Function to get a random choice for the computer
function getComputerChoice() {
    const selection = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * selection.length);
    return selection[randomIndex];
}

function updateScoreDisplays() {
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

function scoreMessage(message) {
    updates.textContent = ""; // Clear previous message
    const messageContent = document.createElement("p");
    messageContent.textContent = message;
    updates.appendChild(messageContent);
}

function checkScore() {
    if (playerScore === 5) {
        scoreMessage("You won!");
        endGame();
    } else if (computerScore === 5) {
        scoreMessage("You Lose!");
        endGame();
    }
}

function endGame() {
    gameOver = true;
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.addEventListener("click", resetGame);
    updates.appendChild(playAgainButton);
    playAgainButton.focus(); // Automatically focus the button
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    updates.textContent = ""; // Clear updates message
    updateScoreDisplays();
}

// Play a single round of the game and update scores
function playRound(playerChoice, computerChoice) {
    if (gameOver) return; // Stop game logic if game is over

    if (playerChoice === computerChoice) {
        const tieMessage = document.createElement("p");
        tieMessage.textContent = `It's a tie! The Computer also picked ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
        updates.textContent = ""; // Clear previous messages
        updates.appendChild(tieMessage);
        return;
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        updates.textContent = `You win! The Computer picked ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    } else {
        computerScore++;
        updates.textContent = `You lose! The Computer picked ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    }
    updateScoreDisplays();
    checkScore();
}

choices.addEventListener("click", (e) => {
    const playerChoice = e.target.id;
    if (!gameOver && ["rock", "paper", "scissors"].includes(playerChoice)) {
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
});