// Defining a list of colours to choose from
let buttonColours = ["red", "blue", "green", "yellow"];

// List that contains generated pattern
let gamePattern = [];

// List to store user's clicked pattern
let userClickedPattern = [];

// variable to track current level
let level = 0;

// Defining a function to generate a random sequence
function nextSequence() {
  level += 1;
  $("h1").text("LEVEL " + level);

  let randomNumber = Math.floor(Math.random() * 4); // Generates a random number between 0 to 3 inclusive
  let randomChosenColour = buttonColours[randomNumber];

  // Adding random colour to the game pattern
  gamePattern.push(randomChosenColour);
  playAudio(randomChosenColour);
  $("#" + randomChosenColour)
    .delay(100)
    .fadeOut()
    .fadeIn("slow"); // flash animation
}

// Function to play a sound
function playAudio(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Function for animations
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// add event listeners to button to listen for clicks
$(".btn").click(function (e) {
  e.preventDefault();
  console.log(e);
  let userChosenColor = $(this).attr("id");
  console.log(userChosenColor);
  playAudio(userChosenColor);
  animatePress(userChosenColor);
  userClickedPattern.push(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

// add event listener for kkeys to start the game
let gameStarted = false; // variable to track if game has started or not
$(document).keypress(function (e) {
  if (!gameStarted) {
    startOver();
    // if game has not started yet, call nextSequence
    console.log("starting game");
    nextSequence();
    gameStarted = true;
    $("h1").text("LEVEL " + level);
  }
});

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  gameStarted = false;
}

// Method to check if the user is clicking the right sequence
function checkAnswer(currentLevel) {
  console.log(userClickedPattern);
  console.log(gamePattern);
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");
    if (gamePattern.length - 1 == currentLevel) {
      console.log("sequence finished. user passed. onto the next");
      setTimeout(nextSequence, 1000);
      userClickedPattern = [];
    }
  } else {
    playAudio("wrong");
    $("h1").text("GAME OVER, PRESS ANY KEY TO RESTART");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    console.log("Fail");
    gameStarted = false;
  }
}
