//connecting with html elements
let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector("#reset-btn");
let newgame = document.querySelector("#newgamebtn");
let message = document.querySelector("#msg");
let win = document.querySelector(".message");
let container = document.querySelector(".game-container");
let turnx = true;


//winning patterns in tic tac toe game
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];
//taking input of "X" or "O"
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnx) {

            box.innerHTML = "X";
            turnx = false;
        }
        else {
            box.innerHTML = "O";
            turnx = true;
        }
        box.disabled = true;
        checkWinner();
    })

});
//input forbidden
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

//input access given
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
}

//tie condition
const checkTie = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false;
        }
    }
    return true;
};

// checking the game result
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 === pos3) {
                disableBoxes();
                container.classList.add("hide");
                win.classList.remove("hide");

                message.innerText = message.innerText + "  " + pos1;


            }
            
        }
        
    }
    if(checkTie()){
                container.classList.add("hide");
                win.classList.remove("hide");
                message.innerText = "It is a tie!";
    }
};

//first time opening a game
if(!checkWinner() )
{
    container.classList.add("hide");
                win.classList.remove("hide");

                message.innerText = "Start a new game";
}
//making reset button work
reset.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = null;
        enableBoxes();
        message.innerText = "Winner is"
        win.classList.add("hide");
        container.classList.remove("hide");
    }
})

//making new game button work
newgame.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = null;
        enableBoxes();
        win.classList.add("hide");
        container.classList.remove("hide");
        message.innerText = "Winner is"
    }
})
