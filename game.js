// Defining a list of colours to choose from
let buttonColours = ["red", "blue", "green", "yellow"];

// List that contains generated pattern
let gamePattern = [];

// List to store user's clicked pattern
let userClickedPattern = [];
// Defining a function to generate a random sequence
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4); // Generates a random number between 0 to 3 inclusive
  console.log(randomNumber);
  let randomChosenColour = buttonColours[randomNumber];

  // Adding random colour to the game pattern
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  $("#" + randomChosenColour)
    .delay(100)
    .fadeOut()
    .fadeIn("slow");
}
// $("div[type='button']").click(function (e) {
//   e.preventDefault();
//   console.log(e);
// });

$(".btn").click(function (e) {
  e.preventDefault();
  console.log(e);
  let userChosenColor = $(this).attr("id");
  console.log(userChosenColor);
});

nextSequence();
