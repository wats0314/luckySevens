
function playGame() {
var startingbet = document.getElementById("betamount").value;
document.getElementById("moneyinput").innerHTML = startingbet;
console.log(startingbet)


function rollTwo(){
return Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1); 
}

	
if (startingbet <= 0){
alert("Enter a $ amount that is more than 0")}	

	
var moneyLog = new Array();
	
	for(var rollCount = 0; startingbet > 0; ++ rollCount){
	var diceSum = rollTwo();
	moneyLog.push(startingbet);
	console.log(startingbet);
		if(diceSum !== 7){ startingbet -= 1}
		else{startingbet += 4}
}

var highestMoney = (Math.max(...moneyLog))

	
for (i = 0; i < moneyLog.length; i++){
		if (moneyLog[i] == highestMoney){var highRollIndex = i}
else {}
}
			
console.log("at roll " + highRollIndex + " we were rich")		
console.log(Math.max(...moneyLog) + " was the most money we had")	
console.log(rollCount + " rolls before going broke")

	
}	




