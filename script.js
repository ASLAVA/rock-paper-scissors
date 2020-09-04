const buttons = document.querySelectorAll('button');



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        console.log(playerSelection);
    })
});



function game() {

    var winCount = 0;
    var loseCount = 0;

    function computerPlay() {
      switch(Math.floor(Math.random() * Math.floor(3))) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        default: 
          return 'scissors';
     }
    
    }

    function playRound(playerSelection, computerSelection) {

      

     function playerWins() {
        console.log(`Player wins! ${playerSelection} beats ${computerSelection}!`);
        winCount++;
      }

      function playerLooses() {
       console.log(`Computer wins! ${computerSelection} beats ${playerSelection}!`);
        loseCount++;
      }


      return (playerSelection === computerSelection) ? console.log('It\'s a Tie') :
      (playerSelection === 'rock' && computerSelection === 'paper') ? playerLooses() :
      (playerSelection === 'rock' && computerSelection === 'scissors') ? playerWins() :
      (playerSelection === 'paper' && computerSelection === 'scissors') ? playerLooses() :
      (playerSelection === 'paper' && computerSelection === 'rock') ? playerWins() :
      (playerSelection === 'scissors' && computerSelection === 'rock') ? playerLooses() : playerWins();
  } 

    

    return (winCount > loseCount) ? (`Player wins. ${winCount} to ${loseCount}`) : 
    (`Computer wins. ${loseCount} to ${winCount}`); 
    
  }
