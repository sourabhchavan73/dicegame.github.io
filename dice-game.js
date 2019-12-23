var diceImg = document.querySelector(".dice");
var rollDice = document.querySelector(".btn-roll");
var holdBtn = document.querySelector(".btn-hold")
var activeClass = document.querySelector(".active")
var newGame = document.querySelector(".btn-new")
resetAll();
var	totalScore = 0; 
var activePlayer = 0;
var scores = [0,0];
var gamePlaying; 
// document.querySelector("#current-0").textContent = "0";
// document.querySelector("#current-1").textContent = "0";
// document.querySelector("#score-0").textContent = "0";
// document.querySelector("#score-1").textContent = "0";


diceImg.style.display = "none";

rollDice.addEventListener("click", function(){
	if (gamePlaying){
		// Generate Random Number
	var dice = Math.floor(Math.random() * 6) + 1;

	//  display the Image
	diceImg.src = "dice-" + dice + ".png";
	diceImg.style.display = "block";

	// Adding the score
	if (dice !== 1){ 
		totalScore += dice;
		document.querySelector("#current-" + activePlayer).textContent = totalScore;
	}
	else{
		nextPlayer();
	}
}	
})

	// Implementaion of Hold Button
	holdBtn.addEventListener("click", function(){
	if(gamePlaying){
	// Updating score on UI
	scores[activePlayer] += totalScore;
	document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
	
	// when hits the score 100 winner.
	if( scores[activePlayer] >= 20){
		document.querySelector("#name-" + activePlayer).textContent = "Winner";
		document.querySelector(".dice").style.display = "none";
		document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
		document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
		gamePlaying = false;
	}
	else{
	nextPlayer();		
	}
	}
})
		// New Game 
		newGame.addEventListener("click", function(){
			resetAll();
		})
	
	// Next Player Function 
	function nextPlayer(){
		// next Player 
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		totalScore = 0;

		document.querySelector("#current-0").textContent = 0;
		document.querySelector("#current-1").textContent = 0;

		document.querySelector(".player-0-panel").classList.toggle("active");
		document.querySelector(".player-1-panel").classList.toggle("active");
		diceImg.style.display = "none";
	}

	function resetAll(){
	totalScore = 0; 
	activePlayer = 0;
	scores = [0,0];
	gamePlaying = true;
		document.querySelector("#current-0").textContent = "0";
		document.querySelector("#current-1").textContent = "0";
		document.querySelector("#score-0").textContent = "0";
		document.querySelector("#score-1").textContent = "0";
		diceImg.style.display = "none";
		document.querySelector("#name-0").textContent = "Player 1";
		document.querySelector("#name-1").textContent = "Player 2";
		document.querySelector(".player-0-panel").classList.remove("active");
		document.querySelector(".player-1-panel").classList.remove("active");
		document.querySelector(".player-0-panel").classList.remove("winner");
		document.querySelector(".player-1-panel").classList.remove("winner");
		document.querySelector(".player-0-panel").classList.add("active");
	}