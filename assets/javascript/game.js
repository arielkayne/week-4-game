$(document).ready(function(){

// Pseudo coding time! Billy Madison RPG

var playerSelected;
var enemySelected;
var gameOn;
var gameOver;
var attackMultiplier;
var enemyHP;
var enemyAttack;
var myAttack;
var myHP;
var status1=false;
var status2=false;
var status3=false;
var status4=false;
var HP1=100;
var HP2=140;
var HP3=100;
var HP4=150;
var attack1=15;
var attack2=25;
var attack3=15;
var attack4=30;
var attacker;
var defender;
var no1="no1";
var no2="no2";
var no3="no3";
var no4="no4";

// Reset all characters back to default start locations, reset vars
console.log("start of scripts");

reset();
updateHP();

// character div click functions
$("#char1").click(function(){
	console.log("character 1 has been pressed");
	if (gameOn===true && enemySelected===true) {
		$("#gameBroke").html("Finish attacking your current enemy before the next one please.");
		console.log("wrong click");
	};

	if (gameOn===true&& enemySelected===false) {
		if (attacker===no1) {
			$("#gameBroke").html("You can't attack yourself, silly.");
		console.log("wrong click");
		}
		else {
			enemySelected=true;
			status1=true;
			enemyHP=HP1;
			enemyAttack=attack1;
			defender=no1;
			$("#char1").css("left","20px");
			if (status2===true) {
				$("#char3").css({
					"left": "20px",
					"top": "500px"});
				$("#char4").css({
					"left": "190px",
					"top": "500px"});
			};
			if (status3===true) {
				$("#char2").css({
					"left": "20px",
					"top": "500px"});
				$("#char4").css({
					"left": "190px",
					"top": "500px"});
			};
			if (status4===true) {
				$("#char2").css({
					"left": "20px",
					"top": "500px"});
				$("#char3").css({
					"left": "190px",
					"top": "500px"});
			};			
			setTimeout(function() {
				alert("Click the 'Attack' button to fight your nemesis.")
	  			}, 500);
			console.log("now you're ready to attack");
		}
	};

	if (gameOn===false) {
			gameOn=true;
			status1=true;
			myHP=HP1;
			myAttack=attack1;
			attacker=no1;
			$("#char1").css({
				"left": "20px",
				"top": "60px"});
			$("#char2").css({
				"left": "20px",
				"top": "280px"});
			$("#char3").css({
				"left": "190px",
				"top": "280px"});
			$("#char4").css({
				"left": "360px",
				"top": "280px"});
			console.log("you've selected Billy to fight!");
	};
});

$("#char2").click(function(){
	console.log("character 2 has been pressed");
	if (gameOn===true && enemySelected===true) {
		$("#gameBroke").html("Finish attacking your current enemy before the next one please.");
		console.log("wrong click");
	};
	if (gameOn===true&& enemySelected===false) {
		if (attacker===no2) {
			$("#gameBroke").html("You can't attack yourself, silly.");
			console.log("wrong click");
		}
		else {		
			enemySelected=true;
			status2=true;
			enemyHP=HP2;
			enemyAttack=attack2;
			defender=no2;

			$("#char2").css("left","20px");
			if (status1===true) {
				$("#char3").css({
					"left": "20px",
					"top": "500px"});
				$("#char4").css({
					"left": "190px",
					"top": "500px"});
			};
			if (status3===true) {
				$("#char1").css({
					"left": "20px",
					"top": "500px"});
				$("#char4").css({
					"left": "190px",
					"top": "500px"});
			};
			if (status4===true) {
				$("#char1").css({
					"left": "20px",
					"top": "500px"});
				$("#char3").css({
					"left": "190px",
					"top": "500px"});
			};
			setTimeout(function() {
				alert("Click the 'Attack' button to fight your nemesis.")
	  			}, 500);
			console.log("now you're ready to attack");
		}
	};
	if (gameOn===false) {
			gameOn=true;
			status2=true;
			myHP=HP2;
			myAttack=attack2;
			attacker=no2;

			$("#char2").css({
				"left": "20px",
				"top": "60px"});
			$("#char1").css({
				"left": "20px",
				"top": "280px"});
			$("#char3").css({
				"left": "190px",
				"top": "280px"});
			$("#char4").css({
				"left": "360px",
				"top": "280px"});
			console.log("you've selected Bus Driver to fight!");
	};
});

$("#char3").click(function(){
	console.log("character 3 has been pressed");
	if (gameOn===true && enemySelected===true) {
		$("#gameBroke").html("Finish attacking your current enemy before the next one please.");
		console.log("wrong click");
	};
	if (gameOn===true&& enemySelected===false) {
		if (attacker===no3) {
			$("#gameBroke").html("You can't attack yourself, silly.");
			console.log("wrong click");
		}
		else {	
			enemySelected=true;
			status3=true;
			enemyHP=HP3;
			enemyAttack=attack3;
			defender=no3;
			$("#char3").css("left","20px");
			if (status1===true) {
				$("#char2").css({
					"left": "20px",
					"top": "500px"});
				$("#char4").css({
					"left": "190px",
					"top": "500px"});
			};
			if (status2===true) {
				$("#char1").css({
					"left": "20px",
					"top": "500px"});
				$("#char4").css({
					"left": "190px",
					"top": "500px"});
			};
			if (status4===true) {
				$("#char1").css({
					"left": "20px",
					"top": "500px"});
				$("#char2").css({
					"left": "190px",
					"top": "500px"});
			};		
			setTimeout(function() {
				alert("Click the 'Attack' button to fight your nemesis.")
	  			}, 500);
			console.log("now you're ready to attack");
		}
	};
	if (gameOn===false) {
			gameOn=true;
			status3=true;
			myHP=HP3;
			myAttack=attack3;
			attacker=no3;
			$("#char3").css({
				"left": "20px",
				"top": "60px"});
			$("#char1").css({
				"left": "20px",
				"top": "280px"});
			$("#char2").css({
				"left": "190px",
				"top": "280px"});
			$("#char4").css({
				"left": "360px",
				"top": "280px"});
			console.log("you've selected Eric to fight!");
	};
});

$("#char4").click(function(){
	console.log("character 4 has been pressed");
	if (gameOn===true && enemySelected===true) {
		$("#gameBroke").html("Finish attacking your current enemy before the next one please.");
		console.log("wrong click");
	};
	if (gameOn===true&& enemySelected===false) {
		if (attacker===no4) {
			$("#gameBroke").html("You can't attack yourself, silly.");
			console.log("wrong click");
		}
		else {	
			enemySelected=true;
			status4=true;
			enemyHP=HP4;
			enemyAttack=attack4;
			defender=no4;
			$("#char4").css("left","20px");
			if (status1===true) {
				$("#char2").css({
					"left": "20px",
					"top": "500px"});
				$("#char3").css({
					"left": "190px",
					"top": "500px"});
			};
			if (status3===true) {
				$("#char1").css({
					"left": "20px",
					"top": "500px"});
				$("#char2").css({
					"left": "190px",
					"top": "500px"});
			};
			if (status2===true) {
				$("#char1").css({
					"left": "20px",
					"top": "500px"});
				$("#char3").css({
					"left": "190px",
					"top": "500px"});
			};
			setTimeout(function() {
				alert("Click the 'Attack' button to fight your nemesis.")
	  			}, 500);
			console.log("now you're ready to attack");
		}
	};
	if (gameOn===false) {
			gameOn=true;
			status4=true;
			myHP=HP4;
			myAttack=attack4;
			attacker=no4;
			$("#char4").css({
				"left": "20px",
				"top": "60px"});
			$("#char1").css({
				"left": "20px",
				"top": "280px"});
			$("#char2").css({
				"left": "190px",
				"top": "280px"});
			$("#char3").css({
				"left": "360px",
				"top": "280px"});
			console.log("you've selected Blob to fight!");
	};
});

// resets all parameters to initial game load
function reset (){
	console.log("reset function called");
	playerSelected=false;
	enemySelected=false;
	gameOn=false;
	gameOver=false;
	attackMultiplier=0;
	enemyHP=0;
	enemyAttack=0;
	myAttack=0;
	myHP=0;
	status1=false;
	status2=false;
	status3=false;
	status4=false;
	attacker=null;
	defender=null;
	$("#char1").css({
		"left": "20px",
		"top": "60px",
		"background":"white"});
	$("#char2").css({
		"left": "190px",
		"top": "60px",
		"background":"white"});
	$("#char3").css({
		"left": "360px",
		"top": "60px",
		"background":"white"});
	$("#char4").css({
		"left": "530px",
		"top": "60px",
		"background":"white"});
		$("#char1HP").html("HP: "+HP1);
		$("#char2HP").html("HP: "+HP2);
		$("#char3HP").html("HP: "+HP3);
		$("#char4HP").html("HP: "+HP4);


};

// changes displayed hp foe each character
function updateHP() {
	if (attacker===no1) {
		$("#char1HP").html("HP: "+myHP);
		currentAttacker="#char1";
	}
	if (attacker===no2) {
		$("#char2HP").html("HP: "+myHP);
		currentAttacker="#char2";
	}
	if (attacker===no3) {
		$("#char3HP").html("HP: "+myHP);
		currentAttacker="#char3";
	}	
	if (attacker===no4) {
		$("#char4HP").html("HP: "+myHP);
		currentAttacker="#char4";
	}	
	if (defender===no1) {
		$("#char1HP").html("HP: "+enemyHP);
		currentEnemy="#char1";
	}
	if (defender===no2) {
		$("#char2HP").html("HP: "+enemyHP);
		currentEnemy="#char2";
	}
	if (defender===no3) {
		$("#char3HP").html("HP: "+enemyHP);
		currentEnemy="#char3";
	}
	if (defender===no4) {
		$("#char4HP").html("HP: "+enemyHP);
		currentEnemy="#char4";
	}
	console.log("char hp updated");
};

// attackUp increases attack multiplier and attack strength
function attackUp(){
	attackMultiplier++;
	myAttack=myAttack+(Math.floor(attackMultiplier*Math.random()*15));
	console.log("your new attack strength is: "+myAttack);
};


// button click action for #attack
$("#attack").click(function(){
	console.log("attack has been clicked");
	if (myHP>0 && enemyHP>0){
		enemyHP=(enemyHP-myAttack);
		if (enemyHP<=0) {
			enemyHP=0;
			setTimeout(function() {
			alert("Pick your next target")
  			}, 500);
  			enemySelected=false;
			console.log("you defeated your enemy");


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!	
			console.log("ready to select new enemy...");
			$(currentEnemy).css({"background":"red"});

		}
		
		else {
			myHP=(myHP-enemyAttack);
			if (myHP<=0) {
				$(currentAttacker).css({"background":"red"});
				myHP=0;
				setTimeout(function() {
				alert("You dead. Hit reset to try again.")
  				}, 500);
				console.log("Your HP ran out. You lose");
			}
			console.log("Your enemy HP is: "+enemyHP);
			console.log("Your remaining HP is: "+myHP);
			attackUp();
			updateHP();
		}
	}
	


	else {
		$("#gameBroke").html("You're dead. You can't fight no more.");	
		alert("You dead. Hit reset to try again.");	
	}
});

// button click action for #reset
$("#reset").click(function(){
	console.log("reset has been clicked");
	reset();

});


// Build the background of the page
	
// 	use DannyMcGrath.jpg as background


// Build a container for each character

// 	grey background, red background, black background

// 	Display border of box

// 	display title of character

// 	display remaining hp
// 		must change when fighting

// 	display photo

// characters: Billy, Bus Driver, Eric, Revolting Blob, Veronica Vaughn, Ms Lippy, Danny McGrath

// 		charBilly
// 			name: "Billy Madison"
// 			image: Billy.jpg
// 			hp: 100
// 			attack: 15

// 		charEric
// 			name: "Eric Gordon"
// 			image: Eric.jpg
// 			hp: 100
// 			attack: 15

// 		charBlob
// 			name: "Revolting Blob"
// 			image: RevoltingBlob.jpg
// 			hp: 150
// 			attack: 30

// 		charDriver
// 			name: "Bus Driver"
// 			image: BusDriver.jpg
// 			hp: 140
// 			attack: 25

// build buttons/functions for 

// 	attacking


// 	resetting
});