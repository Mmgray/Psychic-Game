var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"];

var wins = 0;
var losses = 0;
var numGuesses = 10;
var lettersGuessed = [];

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    // userGuess = computerChoices[];
    //String of letters guessed
       lettersGuessed = userGuess;

    //Computer's random guess
    var computerGuess = computerChoices[Math.floor (Math.random() * computerChoices.length)];
    
    //How user adds to the win
    if (userGuess === computerGuess) {
        wins++;
    } 
    //How user losses 
     else {
         losses++;
         numGuesses--;
     }
     //Game over
     if (numGuesses < 0){
         //reset
         wins=0;
         losses=0
         numGuesses=10;
         lettersGuessed=[];
         alert("Game Over!")
     }
     var html = "<h1>The Psychic Game</h1>" + "<br>"+"<h2>Guess what letter I'm thinking of</h2>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + numGuesses + "</p>" + "<p>Your Guess So far: " + lettersGuessed + "</p>";

     document.querySelector("#game").innerHTML = html;
   
     
    };
