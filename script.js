const computerSelectionDisplay = document.getElementById("computer-selection")
const playerSelectionDisplay = document.getElementById("player-selection")
const resultDisplay = document.getElementById("result")

const computerScoreDisplay = document.getElementById("computer-score")
const playerScoreDisplay = document.getElementById("player-score")
const winnerDisplay = document.getElementById("winner")

const possibleChoices = document.querySelectorAll("button")

let computerScore=0
let playerScore=0
let choices
let result

let playerSelection
let computerSelection

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    choices = e.target.id
    playerSelectionDisplay.innerHTML = choices
    computerPlay()
    playRound(choices, computerSelection)
    scores()
    
    
})) 

function game(playerSelection) {
    let computerSelection = computerPlay();
    result.innerHTML = (playRound(playerSelection, computerSelection));
    if (userScore == 5 || computerScore == 5) {
        scores();
        userScore = 0;
        computerScore = 0;
        playerScore.innerHTML = userScore;
        computerScore.innerHTML = computerScore;
        
    }
}

function computerPlay () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if ( randomNumber === 1) {
        computerSelection = "rock" 
    }
    if ( randomNumber === 2) {
        computerSelection = "paper" 
        }
    if ( randomNumber === 3) {
        computerSelection = "scissors" 
        } 
    return computerSelectionDisplay.innerHTML = computerSelection
        
    }

   

function playRound (playerSelection, computerSelection) {
    let computerScore=0;
    let playerScore=0;
    if(playerSelection === computerSelection) {   
        result = "Oh! It's a tie"
    }
        
    if(playerSelection === "rock" && computerSelection === "paper")  { 
        computerScore++;
        computerScoreDisplay.innerHTML=computerScore;
        result = "You lose! Paper beats rock!"
        
    }
    
    if(playerSelection === "rock" && computerSelection === "scissors")    {
        playerScore++;
        playerScoreDisplay.innerHTML=playerScore;
        result = "You win! Rock beats scissors!" 
        
    }
        
    if(playerSelection === "paper" && computerSelection === "rock")   {
        computerScore++;
        computerScoreDisplay.innerHTML=computerScore;
        result = "You lose! Rock beats paper!"
        
    }
        
    if(playerSelection === "paper" && computerSelection === "scissors")   {
        computerScore++;
        computerScoreDisplay.innerHTML=computerScore;
        result = "You lose! Scissors beats paper!"
        
    }

    if(playerSelection === "scissors" && computerSelection === "paper")  { 
        playerScore++;
        playerScoreDisplay.innerHTML=playerScore;
        result = "You win! Scissors beats paper!"
        
    }

    if(playerSelection === "scissors" && computerSelection === "rock")  { 
        computerScore++;
        computerScoreDisplay.innerHTML=computerScore;
        result = "You lose! Rock beats scissors!"
    }
   resultDisplay.innerHTML = result

}



function scores () { 
    if (computerScore > playerScore) { 
        winnerDisplay.innerHTML='computer won'
      } else if (computerScore < playerScore) {
        winnerDisplay.innerHTML="you won"
      } else {
        winnerDisplay.innerHTML="it's a tie"
      }
} 





