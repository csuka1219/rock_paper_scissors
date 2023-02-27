function myFunction(playerMove) {
    var computerMove = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    updateSrc(playerMove, computerMove);
    if (computerMove == playerMove) {
        console.log("Döntetlen");
        updateScores("d");
        return;
    }
    switch (playerMove) {
        case 1:
            if (computerMove == 2) {
                updateScores("l");
                break;
            }
            updateScores("w");
            break;
        case 2:
            if (computerMove == 3) {
                console.log("lose");
                updateScores("l");
                break;
            }
            updateScores("w");
            break;
        case 3:
            if (computerMove == 1) {
                updateScores("l");
                break;
            }
            updateScores("w");
            break;
    }
}

function updateScores(s) {
    document.getElementById(s + "-score").textContent = parseInt(document.getElementById(s + "-score").textContent) + 1;
    switch(s){
        case "w":
            updateLastResult("Győzelem!");
            break;
        case "d":
            updateLastResult("Döntetlen!");
            break;
        case "l":
            updateLastResult("Vereség!");
            break;
    }
}

function updateLastResult(res) {
    document.getElementById("result").textContent = res;
}

function updateSrc(playerMove, computerMove) {
    lst = ["Rock", "Paper", "Scissors"];
    document.getElementById("p-move").src = "./assets/" + lst[playerMove - 1] + ".svg";
    document.getElementById("c-move").src = "./assets/" + lst[computerMove - 1] + ".svg";
}