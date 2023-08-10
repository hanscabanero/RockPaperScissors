game();
//makes a random choice between rock, paper or scissors
//retuns the choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}
//runs game 5 times, keeps score and declares a winner at the end
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for(let i = 0; i < 5; i++)
  {
    console.log(playRound(playerScore,computerScore));
    console.log(` ${playerScore} - ${computerScore}`);
  }
  console.log(`The final score is player: ${playerScore} wins and computer score:  ${computerScore} wins`)
}

function playRound(playerScore, computerScore) {
  //player prompted choice for the round
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    let playerSelection = prompt("Choose rock, paper, or scissors");
    //tie case
    if(playerSelection === computerSelection){
      return` its a tie! you both chose ${[playerSelection]}`;
    }
    //win conditions
    else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}.`;
      //lose condition
    } else {
      computerScore++;
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }