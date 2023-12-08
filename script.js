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
for ( const btn of btnArray){
   btn.addEventListener('click',game);
}
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let winResult;
let gameResult=document.createElement('p');
const board = document.getElementById("resultsDisplay");
var linebreak = document.createElement('br');
function game(evt){
    
    if(roundNumber <=5){
    
    board.textContent='';
        const computerSelection = getComputerChoice();
        const playerSelection= (evt.target.innerText);
       let roundResult = document.createTextNode("ROUND " + roundNumber + " result:");
       
        board.appendChild(roundResult);
         

        if(playRound(playerSelection, computerSelection) == "You win!"){
            playerScore++;

            winResult = document.createTextNode(("You won! You:" + playerScore + " Computer: " + computerScore));
            
            board.appendChild(linebreak);
            board.appendChild(winResult);
            roundNumber++;
        }
        else if (playRound(playerSelection, computerSelection) == "You lose!"){
            computerScore++;
            winResult=document.createTextNode(("You lose! You:" + playerScore + " Computer: " + computerScore));
            
            board.appendChild(linebreak);
            board.appendChild(winResult);
            roundNumber++;
        }
        else if (playRound(playerSelection, computerSelection) == "You tied!"){
            winResult=document.createTextNode(("You tied! Play Again. You:" + playerScore + " Computer: " + computerScore));
            
            board.appendChild(linebreak);
            board.appendChild(winResult);
        }
    }
    console.log(roundNumber);
if(roundNumber == 6){
    roundNumber++;
if (playerScore < computerScore){
    
    let textNode= document.createTextNode("GAME OVER. You lost!");
    gameResult.appendChild(textNode);
    board.appendChild(gameResult);
}
else if (playerScore > computerScore){
    let textNode=document.createTextNode("GAME OVER. You won!");
    gameResult.appendChild(textNode);
    board.appendChild(gameResult);
}
else{
    let textNode=document.createTextNode("GAME OVER. You tied!");
    gameResult.appendChild(textNode);
    board.appendChild(gameResult);
}
}

}

