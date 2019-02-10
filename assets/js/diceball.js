var diceImages = [
	// "<img src=https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice1.gif />",
	// "<img src=https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice2.gif />",
	// "<img src=https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice3.gif />",
	// "<img src=https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice4.gif />",
	// "<img src=https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice5.gif />",
	// "<img src=https://homeschoolclipart.com/wp-content/uploads/2015/04/Dice6.gif />",
	"<img src=assets/557px-Dice-1-b.svg.png />",
	"<img src=assets/557px-Dice-2-b.svg.png />",
	"<img src=assets/557px-Dice-3-b.svg.png />",
	"<img src=assets/Dice-4-b.svg.png />",
	"<img src=assets/Dice-5-b.svg.png />",
	"<img src=assets/Dice-6-b.svg.png />",
]

var squares = document.querySelectorAll(".dice");

$("button").click(anotherRoll);

function anotherRoll() { 
	$(".totals").text("");
	var total = 0
	for (var i = 0; i < squares.length; i++) {
		var die = randomRoll();
		squares[i].innerHTML = diceImages[die];
		total += die + 1;
		$(".totals").append("Total of " + (i + 1) + " die is " + total + " / ", '\n');
	}
}


function randomRoll(){
	var roll = Math.floor(Math.random() * 6);
	return roll;
}

// KEEP - anotherRoll function without totals
// function anotherRoll() { 
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].innerHTML = diceImages[randomRoll()];
// 	}
// }
