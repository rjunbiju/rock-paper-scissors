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


const btns = document.querySelectorAll('button');
let btnArray = Array.from(btns);
let playerChoiceImg = document.createElement('img');
let computerChoiceImg = document.createElement('img');
let imgHolder = document.getElementById("imageHolder")

for ( const btn of btnArray){
   btn.addEventListener('click',game);
}
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let winResult;
let winOrLoss;
let isClicked = false;
let gameResult=document.createElement('p');
const board = document.getElementById("resultsDisplay");
const roundDiv = document.getElementById("roundHolder");
const winDisplay = document.getElementById("scoreStatus");
var linebreak = document.createElement('br');
roundDiv.textContent='PICK ROCK, PAPER OR SCISSORS'

function game(evt){
    if(playerScore != 5 && computerScore !=5){
    
    board.textContent='';
    roundDiv.textContent='';
    winDisplay.textContent='';
    const computerSelection = getComputerChoice();
    const playerSelection= (evt.target.innerText.toLowerCase());
    console.log(playerSelection);
    console.log(computerSelection);
    computerChoiceImg.src="images/" + computerSelection + ".png";
    playerChoiceImg.src="images/" + playerSelection + ".png";
    imgHolder.appendChild(playerChoiceImg);
    imgHolder.appendChild(computerChoiceImg);

    let roundResult = document.createTextNode("ROUND " + roundNumber + ":");
    roundDiv.appendChild(roundResult);
         

        if(playRound(playerSelection, computerSelection) == "You win!"){
            playerScore++;

            winOrLoss=document.createTextNode("You win!");
            winResult = document.createTextNode(("You:" + playerScore + " Computer: " + computerScore));
            
            winDisplay.appendChild(winOrLoss);
            board.appendChild(winResult);
            roundNumber++;
        }
        else if (playRound(playerSelection, computerSelection) == "You lose!"){
            computerScore++;
            winOrLoss=document.createTextNode("You lose!");
            winResult=document.createTextNode(("You:" + playerScore + " Computer: " + computerScore));
            
            winDisplay.appendChild(winOrLoss);
            board.appendChild(winResult);
            roundNumber++;
        }
        else if (playRound(playerSelection, computerSelection) == "You tied!"){
            winOrLoss=document.createTextNode("You tied! Play Again.");
            winResult=document.createTextNode(("You:" + playerScore + " Computer: " + computerScore));
            winDisplay.appendChild(winOrLoss);
            board.appendChild(winResult);
        }
    }
    console.log(roundNumber);
if(computerScore == 5 && isClicked == false){
    isClicked = true;
    winDisplay.textContent='';
    let textNode= document.createTextNode("GAME OVER. You lost!");
    gameResult.appendChild(textNode);
    winDisplay.appendChild(gameResult);
}
else if (playerScore == 5 && isClicked == false){
    isClicked = true;
    winDisplay.textContent='';
    let textNode=document.createTextNode("GAME OVER. You won!");
    gameResult.appendChild(textNode);
    winDisplay.appendChild(gameResult);
}


}

