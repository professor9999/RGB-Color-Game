function newGame() {
btnNewGame.setAttribute("disabled", "disabled");
statusDisplay.textContent = "";
colors = [];

for (var n = 0; n < noOfSquares; n++) {
    colors[n] = randomizeColor();
    squares[n].style.backgroundColor = colors[n];
}

for (var m = 0; m < squares.length; m++) {
    if (m > noOfSquares - 1) {
    squares[m].classList.add("hidden");
    } else {
    squares[m].classList.remove("hidden");
    }
}

goalColor = colors[randomize0toN(noOfSquares - 1)];
goalDisplay.textContent = goalColor;
document.querySelector("h1").style.backgroundColor = "rgb(51, 122, 183)";
btnNewGame.textContent = strNewColors;
btnNewGame.removeAttribute("disabled");
}

function winGame() {
for (var i = 0; i < squares.length; i++) {
    statusDisplay.textContent = strCorrect;
    if (squares[i].style.backgroundColor !== goalColor) {
    squares[i].style.backgroundColor = goalColor;
    }
}
document.querySelector("h1").style.backgroundColor = goalColor;
btnNewGame.textContent = strPlayAgain;
}

function randomizeColor() {
var R = randomize0toN(255);
var G = randomize0toN(255);
var B = randomize0toN(255);
return "rgb(" + R + ", " + G + ", " + B + ")";
}

function randomize0toN(max) {
return Math.floor(Math.random() * (max + 1));
}

var noOfSquares = 6;
var colors = [];
var goalColor;

var strTryAgain = "Try Again!";
var strCorrect = "Correct!";
var strNewColors = "New colors";
var strPlayAgain = "Play again?";

var squares = document.querySelectorAll(".square");
var goalDisplay = document.getElementById("goalDisplay");
var statusDisplay = document.getElementById("status");
var btnNewGame = document.getElementById("newGame");
var btnEasyMode = document.getElementById("easymode");
var btnHardMode = document.getElementById("hardmode");

newGame();

btnNewGame.addEventListener("click", function(){ newGame(); });

btnEasyMode.addEventListener("click", function(){ 
if (!btnEasyMode.classList.contains("selected")) {
    btnEasyMode.classList.add("selected");
    btnHardMode.classList.remove("selected");
    noOfSquares = 3;
    newGame();
}
});

btnHardMode.addEventListener("click", function(){ 
if (!btnHardMode.classList.contains("selected")) {
    btnHardMode.classList.add("selected");
    btnEasyMode.classList.remove("selected");
    noOfSquares = 6;
    newGame();
}
});

for (var i = 0; i < squares.length; i++) {
squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === goalColor) {
    winGame(); 
    } 
    else {
    statusDisplay.textContent = strTryAgain;
    this.style.backgroundColor = "transparent";
    }
});
}  
