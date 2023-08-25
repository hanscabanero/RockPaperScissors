const choices = document.querySelectorAll('.choice');
const scoreElement = document.getElementById('score');
const resultElement = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.getAttribute('data-choice');
    const computerChoice = computerChoose();

    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
  });
});

function computerChoose() {
  const choices = ['Charmander', 'Squirtle', 'Bulbasaur'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'Charmander' && computerChoice === 'Bulbasaur') ||
    (playerChoice === 'Squirtle' && computerChoice ==='Charmander') ||
    (playerChoice === 'Bulbasaur' && computerChoice === 'Squirtle')
  ) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'Gary wins!';
  }
}

function displayResult(result, playerChoice, computerChoice) {
  scoreElement.textContent = `Player: ${playerScore} - Gary: ${computerScore}`;
  resultElement.textContent = `${result} You chose ${playerChoice}, Gary  chose ${computerChoice}.`;
}
