function getComputerChoice() {
    const randomNum = Math.random();

    if (randomNum < 1 / 3) {
        return "Rock";
    } else if (randomNum < 2 / 3) {
        return "Paper";
    } else return ("Scissors");
}

function getPlayerChoice() {
    let choice = prompt("Choose your sign!").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

