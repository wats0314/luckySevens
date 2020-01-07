
function playGame() {
var startingBet = document.getElementById("betAmount").value;
console.log(startingBet)

function rollTwo(){ 
return Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1); 
}

var betMoney = parseInt(startingBet, 10);
	
if (betMoney <= 0){
alert("Enter a $ amount that is more than 0")}	

	
var moneyLog = new Array();
	
	for(var rollCount = 0; betMoney > 0; ++ rollCount){
	var diceSum = rollTwo();
	moneyLog.push(betMoney);
	console.log(betMoney);
		if(diceSum !== 7){ betMoney -= 1}
		else{betMoney += 4}
}

function getMax(){ return Math.max(...moneyLog)}

var highestMoney = getMax();
	
for (i = 0; i < moneyLog.length; i++){
		if (moneyLog[i] == highestMoney){var highRollIndex = i}
	

}
document.getElementById("highMoney").innerHTML = getMax();
document.getElementById("initialBet").innerHTML = startingBet;
document.getElementById("totalRolls").innerHTML = rollCount;
document.getElementById("rollatHighest").innerHTML = highRollIndex;
		
console.log("at roll " + highRollIndex + " we were rich")		
console.log(Math.max(...moneyLog) + " was the most money we had")	
console.log(rollCount + " rolls before going broke")

}






