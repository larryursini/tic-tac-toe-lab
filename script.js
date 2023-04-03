//JS code goes here!

//remember to Whiteboard and Pseudocode before diving into the actual code!
/* 
variable:
for whos turn it is
winner
count x2 of wins per player + ties

function to clear
function to check winner on each click

game logic to determine winner

*/

//getting DOM elements

/* 
use the same click jqurry to grab the classes
change inner text to x or o
use -1 multiplier to change from x /o 

*/
//win conditions


//game logic


//what else will you need?




//let squareZero = document.getElementById("square0")
let winner = false
let xCount = 0
let oCount = 0
let dTies = 0
let turn = 1
let count = 0

// doc elements
let board = document.querySelectorAll('.square')
let xWins = document.getElementById("playerXScore")
let oWins = document.getElementById("playerOScore")
let ties = document.getElementById("ties")
let xturn = document.getElementById("xturn")
let oturn = document.getElementById("oturn")

const clearSquare = document.querySelectorAll(".square")
const resetId = document.getElementById("reset")
//listeners
resetId.addEventListener("click", resetBtn)

//set turn color

xturn.style.color = "#CC8899"

function resetBtn() {
    for (let i = 0; i < 9; i++ ){
    board[i].innerText = ""
    count = 0
    }
}

function xWinner() {
    xCount ++
    winner = true
    xWins.innerText = xCount
    console.log("winner")
    alert("Player X Wins!")
}

function oWinner() {
    oCount ++
    winner = true
    oWins.innerText = oCount
    console.log("winner")
    alert("Player O Wins!")
}

function checkWinner() {
    count ++
    const wins = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]]

for (let win of wins) {
  if (board[win[0]].innerText === board[win[1]].innerText && board[win[0]].innerText === board[win[2]].innerText) {
    if (board[win[0]].innerText === 'X') {
      xWinner()
    } else if (board[win[0]].innerText === 'O') {
      oWinner()
    } else if (count === 9 && winner === false){
        console.log("tie")
        dTies ++
        count = 0
        ties.innerText = dTies
        alert("Tie, ya Bum!")
        winner = true
    }
  }

    }
}

$(document).ready(function(){
    $(".square").click(function(event){
      
        if (winner === true){
            resetBtn() 
            winner = false
        } else if (turn === 1 && this.innerText === ""){
            this.innerText = "X"
            turn *= -1
            xturn.style.color = "#FFFFFF"
            oturn.style.color = "#CC8899"
            checkWinner()
        } else if (turn === -1 && this.innerText === ""){
            this.innerText = "O"
            turn *= -1
            oturn.style.color = "#FFFFFF"
            xturn.style.color = "#CC8899"
            checkWinner()
        } else {
            alert("Chose Another Location")
        }

    }); 
    
 


});