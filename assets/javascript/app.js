//create game object
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 6;

var game = {
  question: [
    "The movie Inglorious Bastards starred Leonardo DiCaprio?",
    "Just about every character that you like in Game of Thrones dies?",
    'Dwayne "The Rock" Johnson is one of the highest paid actors in Hollywood?'
  ],
  answer: [false, true, true]
};
var correctAnswer;
var qIndex;
//var userAnswer;

$("document").ready(function() {
  $("#questions").hide();
  $("#finish").hide();
});

//when start button clicked run start()
$("#startButton").click(function() {
  //hide welcome screen html
  $("#welcome").hide();
  //display question html
  $("#questions").show();
  start();
});

//start game
//rest indexCount=0

//fx display question
function displayQuestion() {
  qIndex = Math.floor(Math.random() * game.question.length);
  //select a question to display at random
  var selectedQuestion = game.question[qIndex];
  //select the appropriate answer and store the arr index in correctAnswer
  correctAnswer = game.answer[qIndex];
  $("#theQuestion").html(selectedQuestion);
}
//check to see if the game is over if indexCount<game.question.length

$(".tf").on("click", function() {
  var userAnswer = $(this).attr("data-value");
  var corrected = JSON.parse(userAnswer);
  if (corrected === correctAnswer) {
  } else {
  }
});
//display guestion[indextCount]
//answer[indexCount][0]
//answer[indexCount][1]
//answer[indexCount][2]
//call time

//if time is up
//call the display results
//update the unanswered++;

//if user onlicks then grab the value they store and check it against results[indexCount]
//if correct wins++
//if not correct = lose++;

//else call GameOver fx to display results

//if time runs out or user clicks answer, store val
//check score

//fx display results
//show
//result[indexCount]
//update indexCount
//stop time
//reset the time

//call display question fx

//function gameOver
//display wins, lost, unanswered

var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 6;

function reset() {
  time = 6;

  // DONE: Change the 'display' div to '00:00.'
}

function start() {
  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    displayQuestion();
  }
}
function stop() {
  // DONE: Use clearInterval to stop the count here and set the clock to not be running.
  clearInterval(intervalId);
  clockRunning = false;
}

function count() {
  // decrement time by 1
  time--;
  $("#timeDisplay").html("Time Remaining: " + time);
}

count();
