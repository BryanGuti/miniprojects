function newGame(select){
    let playerSelection = select.srcElement.value
    let botSelection = chooseRobotOption()

    if(playerSelection === botSelection){
        console.log("DRAW")
    }
    else if(playerSelection === "rock" && botSelection === "scissor"){
        console.log("YOU WIN")
    }
    else if(playerSelection === "scissor" && botSelection === "paper"){
        console.log("YOU WIN")
    }
    else if(playerSelection === "paper" && botSelection === "rock"){
        console.log("YOU WIN")
    }
    else if(playerSelection === "rock" && botSelection === "paper"){
        console.log("YOU LOSE")
    }
    else if(playerSelection === "scissor" && botSelection === "rock"){
        console.log("YOU LOSE")
    }
    else if(playerSelection === "paper" && botSelection === "scissor"){
        console.log("YOU LOSE")
    }
}

function chooseRobotOption(){
    let options = ["rock", "scissor", "paper"]
    let choosenRobotOption = options[Math.floor((Math.random() * 3))]

    return choosenRobotOption
}

function gameStart(){
    let rockButton = document.getElementById("rock-button")
    rockButton.addEventListener('click', newGame)
    let scissorButton = document.getElementById("scissor-button")
    scissorButton.addEventListener('click', newGame)
    let paperButton = document.getElementById("paper-button")
    paperButton.addEventListener('click', newGame)

}

window.addEventListener('load', gameStart)