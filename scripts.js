 
 const buttons = document.querySelectorAll("div.choiceButton button");    
 const result = document.querySelector("#result");
 const choice = ['Rock', 'Paper', 'Scissors'] ;
 const resetBtn = document.querySelector('#resetBtn')
 let playerScore = 0;
 let computerScore = 0;

 resetBtn.addEventListener('click',()=> location.reload());

 function computerSelection() {
     /* 
     This function will generate computer play
     Random generate number based on choice length
     Return ‘Rock’, ‘Paper’ or ‘Scissors */
    let computerChoice = choice[~~(Math.random()*choice.length)];   
    return computerChoice;
    } 

    
function playerChoice(e){
             let playerSelection = e.target.id;
             playerChoice = e.target.textContent; 
             playRound(playerSelection, computerSelection());
         } 
    
 function playRound(playerSelection, computerSelection){
     /* 
     Checking for each round
     rock > scissors > paper
     return result
     */ 
    console.log(computerSelection); 
    console.log(playerSelection); 
    if ( playerSelection == computerSelection ) {
        result.textContent="Draw";
        playerScore ++;  
        computerScore ++;
    }

    else if (computerSelection == "Scissors" && playerSelection == "Rock" ||
    computerSelection == "Rock" && playerSelection == "Paper" ||
    computerSelection == "Paper" && playerSelection == "Scissors" ){
        result.textContent=`You Win! ${playerChoice} beats ${computerSelection}`;
        playerScore ++;
        checkWinner();  
    }
    else{
        result.textContent=`You Lose! ${computerSelection} beats ${playerChoice}`;
        computerScore ++;
        checkWinner();
    }
 } 
 
 const results={
     player:["You win against computer!!!","green"],
     computer:["You lost to computer!", "red"],
     tie:["The game is tie!","blue"]
 }
 function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
 function checkWinner(){
     if (playerScore == 5 || computerScore == 5){
        console.log(playerScore)
        console.log(computerScore)
         if (playerScore == computerScore){
             declareWinner ('tie')
         }
         else{
            let win = `${(computerScore>playerScore)? 'computer':'player'}`
            declareWinner(win);
        }
     }

 }
 buttons.forEach((button)=>{ 
         button.addEventListener('click',  playerChoice)
         });   

 function declareWinner(winner){
    finalResults.textContent=results[winner][0]; 
    disableButtons();
 }
