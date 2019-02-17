var diceImages = [
    "<img src=assets/images/557px-Dice-1-b.svg.png />",
    "<img src=assets/images/557px-Dice-2-b.svg.png />",
    "<img src=assets/images/557px-Dice-3-b.svg.png />",
    "<img src=assets/images/Dice-4-b.svg.png />",
    "<img src=assets/images/Dice-5-b.svg.png />",
    "<img src=assets/images/Dice-6-b.svg.png />",
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
        $(".totals").append("<p class='col span-1-of-2 die-total'>Total of " + (i + 1) + " die is " + total + "</p>");
    }
}


function randomRoll(){
    var roll = Math.floor(Math.random() * 6);
    return roll;
}

// KEEP - anotherRoll function without totals
// function anotherRoll() {
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].innerHTML = diceImages[randomRoll()];
//     }
// }
