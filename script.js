function getComputerChoice(){
    let computerNumber = Math.random()
    if (computerNumber >= 0 && computerNumber <= 0.33)
        return "rock";
    else if(computerNumber > 0.33 && computerNumber <= 0.66)
     return "paper";
    else    
     return "scissors";
}

function playRound(playerSelection,computerSelection){
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper")
        return "Invalid option. Choose rock, paper, or scissors!";

    if ((playerChoice == "rock" && computerSelection == "rock") 
        || (playerChoice == "scissors" && computerSelection == "scissors")
        || (playerChoice == "paper" && computerSelection == "paper"))
        return "You tied!";
else if ((playerChoice == "rock" && computerSelection == "scissors")
        ||(playerChoice == "paper" && computerSelection == "rock")
        || (playerChoice == "scissors" && computerSelection == "paper"))
        return "You win!";
else
    return "You lose!";
}




function game(){
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    for (let i =0; i < 5; i++){
        const playerSelection = prompt("Choose rock, paper, or scissors!");
        const computerSelection = getComputerChoice();
        console.log ("ROUND " + roundNumber + " result:");
        roundNumber++; 
        if(playRound(playerSelection, computerSelection) == "You win!"){
            playerScore++;
            console.log("You won! You have " + playerScore + " points, and the computer has " + computerScore + " points");
        }
        else if (playRound(playerSelection, computerSelection) == "You lose!"){
            computerScore++;
            console.log("You lose! You have " + playerScore + " points, and the computer has " + computerScore + " points")
        }
        else if (playRound(playerSelection, computerSelection) == "You tied!"){
            console.log("You tied! You have " + playerScore + " points, and the computer has " + computerScore + " points")
        }
        else  {
            i--;
            roundNumber--;
            console.log ("Invalid option. Choose rock, paper, or scissors!");
        }
    }
    if (playerScore < computerScore){
        return "GAME OVER. You lost!";
    }
    else if (playerScore > computerScore)
        return "GAME OVER. You won!";
    else    
        return "GAME OVER. You tied!";
}

console.log(game()); 