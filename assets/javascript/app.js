var game = {
  question: [
    "The movie Inglorious Bastards starred Leonardo DiCaprio?",
    "Just about every character that you like in Game of Thrones dies?",
    'Dwayne "The Rock" Johnson is one of the highest paid actors in Hollywood?'
  ],
  answer: [false, true, true]
};

var answer;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var qIndex;

var correctAnswersText = $("#correctAnswers");
var incorrectAnswersText = $("#incorrectAnswers");
var unansweredText = $("#unanswered");

var intervalId;
var clockRunning = false;
var time = 4;
var clockRunning = false;

//at document load
$("document").ready(function() {
  //hide questions html
  $("#questions").hide();
  //hide finish html
  $("#finish").hide();
});

//on start button click
$("#startButton").click(function() {
  //hide welcome screen html
  $("#welcome").hide();
  //display question html
  $("#questions").show();
  start();
});

function displayQuestion() {
  //store an index value
  qIndex = Math.floor(Math.random() * game.question.length);
  //select a question to display at the above determined index
  var selectedQuestion = game.question[qIndex];
  //select the appropriate answer and store the arr index in answer
  answer = game.answer[qIndex];
  //display question to page
  $("#theQuestion").html(selectedQuestion);
}

$(".tf").on("click", function() {
  //store users click on true or false
  var userAnswer = $(this).attr("data-value");
  //changes "data-value" to boolean for comparison
  var corrected = JSON.parse(userAnswer);
  //if user chooses right answer increment correctAnswers
  if (corrected === answer) {
    correctAnswers++;
    removeQuestion();
    reset();
    gameOver();
    //if user chooses wrong answer increment incorrectAnswers
  } else if (corrected !== answer) {
    incorrectAnswers++;
    removeQuestion();
    reset();
    gameOver();
  }
});

function gameOver() {
  //once no questions remain
  if (game.question.length === 0) {
    stop();
    correctAnswersText.html("Correct " + correctAnswers);
    incorrectAnswersText.html("Incorrect " + incorrectAnswers);
    unansweredText.html("Unanswered " + unanswered);
    $("#questions").hide();
    $("#finish").show();
  }
}

function reset() {
  stop();
  time = 4;
  start();
}

function start() {
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    displayQuestion();
  }
}

function stop() {
  clearInterval(intervalId);
  clockRunning = false;
}

//decrement time and display to page
function count() {
  time--;
  $("#timeDisplay").html("Time Remaining: " + time);
  //on time out increment unanswered a
  if (time === 0) {
    unanswered++;
    removeQuestion();
    reset();
    gameOver();
  }
}

//removes from the array the question most recently displayed to the user
function removeQuestion() {
  game.question.splice(qIndex, 1);
}
