const intro = document.querySelector(".intro");
const choices = document.querySelector(".choices");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const updates = document.querySelector("#updates");
const playAgainBtn = document.querySelector("#playAgainBtn");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;
playAgainBtn.style.setProperty('visibility', 'hidden');

// Function to get a random choice for the computer
function getComputerChoice() {
    const selection = ["rock", "paper", "scissors"];
    return selection[Math.floor(Math.random() * selection.length)];
}

function updateScoreDisplays() {
    playerScoreDisplay.textContent = `PLAYER: ${playerScore}`;
    computerScoreDisplay.textContent = `COMPUTER: ${computerScore}`;
}

// Function to display a glowing message
function scoreMessage(message) {
    updates.textContent = ""; // Clear previous message
    const messageContent = document.createElement("p");
    messageContent.textContent = message;
    messageContent.className = "fade-in-message"; // Add class for animation and glow
    updates.appendChild(messageContent);
}

const winMessages = [
    "The system couldn’t keep up with you.",
    "The Computer couldn’t stand a chance.",
    "You outsmarted the system.",
    "Maybe it was luck, but you've got the win.",
    "It could’ve been luck... but you take the win.",
    "The challenge was tough, but you found a way to win."
];

const loseMessages = [
    "Defeat for now, but the challenge continues.",
    "Defeated. The system wins this round, but you have another shot.",
    "You’ve lost, but the game isn’t over. Try again and turn the tide.",
    "The machine outsmarts you, try once more.",
    "It’s not the end—just a setback. I’ll try again.",
    "The system won, gotta try again."
];

// Function to display a random win message
function showRandomWinMessage() {
    const randomIndex = Math.floor(Math.random() * winMessages.length);
    return winMessages[randomIndex];
}

// Function to display a random lose message
function showRandomLoseMessage() {
    const randomIndex = Math.floor(Math.random() * loseMessages.length);
    return loseMessages[randomIndex];
}

// Check scores and end game if necessary
function checkScore() {
    if (playerScore === 5) {
        const randomWinMessage = showRandomWinMessage();
        scoreMessage(randomWinMessage);
        endGame();
    } else if (computerScore === 5) {
        const randomLoseMessage = showRandomLoseMessage();
        scoreMessage(randomLoseMessage);
        endGame();
    }
}

// End the game and add a play again button
function endGame() {
    gameOver = true;
    playAgainBtn.style.setProperty('visibility', 'visible');
    playAgainBtn.addEventListener("click", resetGame);

    // Trigger fade-in effect for the button
    playAgainBtn.focus(); // Focus on the button
}

// Reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    playAgainBtn.style.visibility = "hidden";


    // Reset the content of #updates
    updates.textContent = "Choose your sign to start";

    // Remove the style from #updates
    updates.removeAttribute("style");

    // Reset scores or any other game state
    updateScoreDisplays();
}

// Play a single round and handle score logic
function playRound(playerChoice, computerChoice) {
    if (gameOver) return;

    if (playerChoice === computerChoice) {
        scoreMessage(
            `It's a tie! The Computer also picked ${capitalize(computerChoice)}.`
        );
        return;
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        scoreMessage(
            `You win! The Computer picked ${capitalize(computerChoice)}.`
        );
    } else {
        computerScore++;
        scoreMessage(
            `You lose! The Computer picked ${capitalize(computerChoice)}.`
        );
    }
    updateScoreDisplays();
    checkScore();
}

// Utility function to capitalize the first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Add click event listener to choices
choices.addEventListener("click", (e) => {
    const playerChoice = e.target.dataset.choice;
    if (!gameOver && ["rock", "paper", "scissors"].includes(playerChoice)) {
        // Remove the fade animation
        updates.style.animation = "none";
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
});