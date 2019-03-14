//data for the game

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var computerChoice = "";

//display elements for the game
var winsElement = document.getElementById("wins");
var lossesElement = document.getElementById("losses");
var guessesLeftElement = document.getElementById("guesses-left");
var guessesElement = document.getElementById("your-guesses");
var computerChoiceArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

//Function runs new game
function init() {
    guessesLeft = 9;
    guesses = [];
    //This determines computer's choice
    computerChoice = computerChoiceArray[Math.floor(Math.random() * Math.floor(computerChoiceArray.length))];
}

//Function updates the html
function updateDisplay() {
    guessesElement.textContent = guesses;  
    winsElement.textContent = wins;
    lossesElement.textContent = losses;
    guessesLeftElement.textContent = guessesLeft;
}

//Will record user keys, player's choice
document.onkeyup = function(event) {
    //This tells the game what the user chose
    var choice = event.key

    //when the user pushes a key, it is compared to the computer's random choice
    if (choice === computerChoice)  {     //if the key is correct, it is marked as a win, and the game resets
        wins++;
        init();
    } else { //if the key is incorrect, it drops the guesses remaining by 1, and adds that guess to the "guesses"

        guessesLeft--;
        guesses.push(choice);
    }

    //Checking to see if our guesses have exceeded 9, resets game
    if (guessesLeft === 0) {
        losses++
        init();
    }
    
    updateDisplay();

}

init();
