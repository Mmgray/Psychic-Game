var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"];

var wins = 0;
var losses = 0;
var numGuesses = 10;
var lettersGuessed =[];

document.onkeyup = function(event) {
    var userGuess = event.key.toUpperCase();
    lettersGuessed.push(userGuess);
    //Computer's random guess
    var computerGuess = computerChoices[Math.floor (Math.random() * computerChoices.length)];
    
    //How user adds to the win
    if (userGuess === computerGuess) {
        win++;
    }
    else if (userGuess != computerGuess) {
        numGuesses--;
    }
    //How user losses 
     else  {
         alert("Try Again!");
     }

     if (numGuesses === 0){
        
         losses++;
         numGuesses=10;
         lettersGuessed=[];
     }
     var html = "<h1>The Psychic Game</h1>" + "<br>"+"<h2>Guess what letter I'm thinking of</h2>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + numGuesses + "</p>" + "<p>Your Guess So far: " + lettersGuessed + "</p>";

     document.querySelector("#game").innerHTML = html;
     
    };
