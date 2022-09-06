
console.log(game())

function getComputerChoice() {
    let number = Math.random()
    if (number <= 0.33){
        return "r";
    }
    if (number <= 0.66){
        return "p"; 
    }
    if (number <= 1){
        return "s"; 
    }    
}
function playRound(playerSelection, computerSelection){
    if(playerSelection === "r"){
        if(computerSelection == "r"){
            return "It's a tie! You both picked rock."
        }
        if(computerSelection == "p"){
            return "You lose. Paper beats rock."
        }
        if(computerSelection == "s"){
            return "You won! Rock beats scissors!"
        }
    }
    if(playerSelection === "p"){
        if(computerSelection == "r"){
            return "You won! Paper beats rock!"
        }
        if(computerSelection == "p"){
            return "It's a tie! You both picked paper."
        }
        if(computerSelection == "s"){
            return "You lose. Scissors beats paper."
        }
    }
    if(playerSelection === "s"){
        if(computerSelection == "r"){
            return "You lose. Rock beats scissors."
        }
        if(computerSelection == "p"){
            return "You won! Scissors beats paper!"
        }
        if(computerSelection == "s"){
            return "It's a tie! You both picked scissors."
        }
    }
}
function game(){
    let wins = 0;
    let losses = 0;
    let ties = 0;
    for(let i=0; i<5; i++){
        try {
            let playerSelection = prompt("Choose rock, paper, or scissors.")
            playerSelection = playerSelection.charAt(0).toLowerCase()
            let computerSelection = getComputerChoice()
            let result = playRound(playerSelection, computerSelection)
            switch(result.charAt(4)){
                case "w":
                    wins += 1
                    break;
                case "l":
                    losses += 1
                    break;
                case " ":
                    ties += 1
                    break;
            }
            console.log(result, `Current record: ${wins}W-${ties}T-${losses}L`)
        }
        catch{
            console.log("That didn't work! Did you mistype?");
            i--;
        }
    }
}

