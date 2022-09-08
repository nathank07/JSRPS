const container = document.querySelector('#container');
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const info = document.querySelector("h1");
const winrate = document.querySelector(".score");
let win = 0;
let tie = 0;
let loss = 0;
rock.addEventListener('click', (event) => {
    playRound("rock", getComputerChoice());
});
paper.addEventListener('click', (event) => {
    playRound("paper", getComputerChoice());
});
scissors.addEventListener('click', (event) => {
    playRound("scissors", getComputerChoice());
});
info.innerHTML = `<h1>Select Rock, Paper, or Scissors.</h1>`
winrate.innerHTML = "<div class='score'>" + win + "-" + tie + "-" + loss + "</div>";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function getComputerChoice() {
    let number = Math.random()
    if (number <= 0.33){
        return "rock";
    }
    if (number <= 0.66){
        return "paper"; 
    }
    if (number <= 1){
        return "scissors"; 
    }    
}
function playRound(playerSelection, computerSelection){
    playerMove = capitalizeFirstLetter(playerSelection);
    function ifComputerSelection(losingMove){
        if(computerSelection == losingMove){
            win+=1;
            winrate.innerHTML = "<div class='score'>" + win + "-" + tie + "-" + loss + "</div>";
            info.innerHTML = "<h1>" + playerMove + " beats " + computerSelection + "! You win!</h1>"
        }
        else{
            if(playerSelection === computerSelection){
                tie+=1;
                winrate.innerHTML = "<div class='score'>" + win + "-" + tie + "-" + loss + "</div>";
                info.innerHTML = "<h1>" + playerMove + " ties against " + computerSelection + ". You drew.</h1>"
            }
                else{
                    loss+=1;
                    winrate.innerHTML = "<div class='score'>" + win + "-" + tie + "-" + loss + "</div>";
                    info.innerHTML = "<h1>" + playerMove + " loses against " + computerSelection + ". You lost.</h1>"
                }
    }
    }
    if(playerSelection === "rock"){
        ifComputerSelection("scissors");
    }
    if(playerSelection === "paper"){
        ifComputerSelection("rock");
    }
    if(playerSelection === "scissors"){
        ifComputerSelection("paper")
    }
    if(win == 5 || loss == 5){
        if(win == 5){
            info.innerHTML = `<h1>Congratulations! You reached 5 wins first!</h1>`;
        }
        else {
            info.innerHTML = `<h1>The computer reached 5 wins before you did. You lose...</h1>`;
        }
        win = 0;
        tie = 0;
        loss = 0;
        winrate.innerHTML = "<div class='score'>" + win + "-" + tie + "-" + loss + "</div>";
    }
}

