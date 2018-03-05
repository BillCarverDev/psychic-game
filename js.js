// Variables
var lettersAvailable = ["a", "b", "c", "d", "e", "f", "s"];
var selecectedLetter = "";

var wrongLetters = "";
var wins = 0;
var losses = 0;
var guessesLeft = 7;
// Functions
function begin() {
    document.getElementById("Remainder").innerHTML = [];
    selecectedLetter = lettersAvailable[Math.floor(Math.random() * lettersAvailable.length)];

    console.log("Computer selected the letter " + selecectedLetter); //Remember to call the function like this: begin();
    guessesLeft = 7;
    wrongLetters = [];
    
    document.getElementById("Remainder").innerHTML = guessesLeft;
    // document.getElementById("wins").innerHTML = wins;
    // document.getElementById("losses").innerHTML = losses;

}

//Process

// begin();

document.onkeypress = function(Event) {
    var letterChosen = String.fromCharCode(Event.keyCode).toLowerCase();  //Doesnt' work when placed at top of page with other vars
    if (letterChosen != selecectedLetter) {
        wrongLetters.push(letterChosen);
        document.getElementById("Guesses").innerHTML = wrongLetters.toString();
    }

    if (letterChosen === selecectedLetter){
        wins++;
        document.getElementById("wins").innerHTML = wins;
        console.log(wins);
        alert("So Happy Win!  The letter was " + selecectedLetter + ".  " + "You have won " + wins + " time(s).  Check's in the mail!!!");
        begin();
    }   
        else {
            guessesLeft--;
            document.getElementById("Remainder").innerHTML = guessesLeft;
            console.log(guessesLeft);
        }
    
    if (guessesLeft == 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        setTimeout(function() { alert ("Sorry, the letter was " + selecectedLetter + ".  " + "You have lost " + losses + " time(s).  You are still a tremendous TA."); }, 50);
        // console.log(losses);
        setTimeout(function() { begin(); }, 200);
        }
    }
    



begin();