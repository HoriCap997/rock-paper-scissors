 function computerPlay() {
     /* 
     This function will generate computer play
     Random generate number 1/2/3
     Return ‘Rock’, ‘Paper’ or ‘Scissors */
     let computerNum = Math.floor((Math.random()*3)+1); // Random generate number 1 - 3
     switch (computerNum){
         case 1:
             return "rock";
             break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
     }
 } 
  
 function playRound(playerSelection, computerSelection){
     /* 
     Checking for each round
     rock > scissors > paper
     return result
     */
    if ( playerSelection == computerSelection ) {
        return("Draw")
    }

    else if (computerSelection == "scissors" && playerSelection == "rock" ||
    computerSelection == "rock" && playerSelection == "paper" ||
    computerSelection == "paper" && playerSelection == "scissors" ){
        return(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${(computerSelection).charAt(0).toUpperCase() + computerSelection.slice(1)}`)
            
    }
    else{
        return(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${(playerSelection).charAt(0).toUpperCase() + playerSelection.slice(1)}`)
    }
 }

function game(){
    for (let i=0; i<5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("What's your choice?").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        }
    }
 
game();