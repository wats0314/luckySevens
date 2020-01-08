function resetTable(){
	document.getElementById("rollatHighest").innerHTML = "";
	document.getElementById("totalRolls").innerHTML = "";
	document.getElementById("initialBet").innerHTML = "";
	document.getElementById("highMoney").innerHTML = "";
	document.getElementById("betAmount").value = "0";
	document.getElementById("p2").style.visibility = "visible";
	document.getElementById("playAgain").style.visibility = "hidden";
}

function rollTwo(){ 
return Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1); }

function playGame() {

	var startingBet = document.getElementById("betAmount").value;
	var diceSound = new Audio("./sounds/dice.mp3");
	var betMoney = parseInt(startingBet, 10);
	var moneyLog = new Array();

	function validate(){ 	
	if (betMoney <= 0){
	alert("Enter a value that is more than $0!")
	}
	if (startingBet == ""){
	alert("You must enter a value to gamble with!")}
	} 

	validate();
		
	for(var rollCount = 0; betMoney > 0; ++ rollCount){
	var diceSum = rollTwo();
	moneyLog.push(betMoney);
	console.log(betMoney);
		if(diceSum !== 7){ betMoney -= 1}
		else{betMoney += 4}
	}

	function getMax(){return Math.max(...moneyLog)}

	var highestMoney = getMax();
		
	for (i = 0; i < moneyLog.length; i++){
		if (moneyLog[i] == highestMoney){var highRollIndex = i}
		}

	console.log("at roll " + highRollIndex + " you had the most money")		
	console.log(Math.max(...moneyLog) + " was the most money you had")	
	console.log("you made " + rollCount + " rolls before going broke")

	if(startingBet == 0 || ""){ //prevents table from filling table without value or 0
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
	}
			


}






