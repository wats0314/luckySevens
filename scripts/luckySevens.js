/* 
	Created by Mitch Watson
	Date Created: 1/3/2020
	Most recent revision: 1/8/2020 
*/

function resetTable(){									/* retunrns page to state before clicking "play" */
	document.getElementById("rollatHighest").innerHTML = ""; 
	document.getElementById("totalRolls").innerHTML = "";
	document.getElementById("initialBet").innerHTML = "";
	document.getElementById("highMoney").innerHTML = "";
	document.getElementById("betAmount").value = "0";
	document.getElementById("p2").style.visibility = "visible";
	document.getElementById("playAgain").style.visibility = "hidden";
}

function rollTwo(){ 									// simulates rolling two dice and returns their sum
return Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1); }

function playGame() {                  					// primary function called when "play" is pressed

	var startingBet = document.getElementById("betAmount").value;
	var diceSound = new Audio("./sounds/dice.mp3");
	var betMoney = parseInt(startingBet, 10);           // changes user input "startingBet" from a string to a number"
	var moneyLog = new Array();							// creates array to store values returned by rollTwo()

	function validate(){ 								// alerts user that they cannot input a negative number, 0, or nothing to play the game
	if (betMoney <= 0){
	alert("Enter a value that is more than $0!")
	}
	if (startingBet == ""){
	alert("You must enter a value to gamble with!")}
	} 

	validate();								
		
	for(var rollCount = 0; betMoney > 0; ++ rollCount){ // adds 4 if roll = 7, subtracts 1 if roll != 7. Logs roll sums to array
	var diceSum = rollTwo();
	moneyLog.push(betMoney);
	console.log(betMoney);
		if(diceSum !== 7){ betMoney -= 1}
		else{betMoney += 4}
	}

	function getMax(){return Math.max(...moneyLog)}		// determines highest number found in the array

	var highestMoney = getMax();
		
	for (i = 0; i < moneyLog.length; i++){
		if (moneyLog[i] == highestMoney){var highRollIndex = i}
		}												// finds where within array the highest value is located (index)

	console.log("at roll " + highRollIndex + " you had the most money")		
	console.log(Math.max(...moneyLog) + " was the most money you had")	
	console.log("you made " + rollCount + " rolls before going broke")

	if(startingBet == 0 || ""){ 						//prevents table from filling table with user input of 0, less than 0, or nothing
		resetTable();
		return;}										
	if(startingBet < 0){
		resetTable();
		return;}
	else{
	diceSound.play();
	document.getElementById("p2").style.visibility = "hidden";
	document.getElementById("highMoney").innerHTML = "$" +  getMax();
	document.getElementById("initialBet").innerHTML = "$" + startingBet;
	document.getElementById("totalRolls").innerHTML = rollCount;
	document.getElementById("rollatHighest").innerHTML = highRollIndex;
	document.getElementById("playAgain").style.visibility = "visible";
	}													// fills table with according values
			


}






