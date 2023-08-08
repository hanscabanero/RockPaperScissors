function getComputerChoice() {

    let computerChoice;
    computerChoice = Math.floor(Math.random() * 3 + 1);
    const choices = ['Rock','Paper','Scissors'];
    switch(computerChoice)
    {
        case 1:
            return choices[1];
        case 2:
            return choices[1];
        case 3:
            return choices[1];
        default:
            return console.log("Error");
    }
}
function playRound(playerSelection, computerSelection) {
    //if player chooses rock & computer chooses paper
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));