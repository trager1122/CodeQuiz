// Question Bank Object
var QuestionBank = [
  {
    question:
      "Which of the following are the major components of designing a web design?",
    answers: {
      a: "HTML",
      b: "CSS",
      c: "JavaScript",
      d: "All of the above",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following functions can be used select any node in the DOM?",
    answers: {
      a: "getElementbyid",
      b: "getElementsbyClass",
      c: "setElementType",
      d: "querySelector",
    },
    correctAnswer: "d",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];

// Iterator for Question count
var currentQ = 0;

// Scorekeeper
var userScore = 0;

// Event for displaying high scores
var highScoresEl = document.getElementById("high-scores");
highScoresEl.addEventListener("click", function () {
  window.location.href = "scores.html";
});

//Creating timer for game
var secondsLeft = QuestionBank.length * 5;
var timeEl = document.getElementById("timer");
timeEl.textContent = "Timer: " + secondsLeft;

function setTime() {
  var timerInterval = setInterval(function () {
    
    timeEl.textContent = "Timer: " + secondsLeft;

    if (secondsLeft==0){
      clearInterval(timerInterval);
      endQuiz();
    }
    secondsLeft--;
  }, 1000);
}

function sendMessage() {
  responseDiv.textContent = "Time's up!";
}

// Event for displaying questions to question div and evaluating correct response
var startEl = document.getElementById("start");
var questionEl = document.getElementById("question-display");
var answer1El = document.getElementById("a");
var answer2El = document.getElementById("b");
var answer3El = document.getElementById("c");
var answer4El = document.getElementById("d");
var responseDiv = document.getElementById("response-display");

startEl.addEventListener("click", function () {
  startEl.remove();
  setTime();
  displayQuestion();
});

function displayQuestion() {
  questionEl.textContent = QuestionBank[currentQ].question;
  answer1El.textContent = QuestionBank[currentQ].answers.a;
  answer2El.textContent = QuestionBank[currentQ].answers.b;
  answer3El.textContent = QuestionBank[currentQ].answers.c;
  answer4El.textContent = QuestionBank[currentQ].answers.d;
}

var responseEl = document.querySelector(".response");
var answer;
responseEl.addEventListener("click", function (event) {
  if (event.target.matches("p")) {
    answer = event.target.id;
    console.log(QuestionBank[currentQ].correctAnswer)
    if (answer === QuestionBank[currentQ].correctAnswer) {
      secondsLeft = secondsLeft + 5;
      responseDiv.textContent = "That is correct!!!";
      currentQ++;
    } else {
      secondsLeft = secondsLeft - 5;
      responseDiv.textContent = "That is incorrect.";
      currentQ++;
    }
    if (currentQ === QuestionBank.length {
      endQuiz();
    } else {
      displayQuestion();
    }
    function endQuiz() {
      while (responseEl.hasChildNodes()) {
        responseEl.removeChild(responseEl.firstChild);
      }
    if (secondsLeft===0)
    }
  }
});

// onclick for the class response
// get the id of the element clicked
// compare the id clicke questionBat[curr].correct
// penality if wrong decrease the timer    timer time = number of question * 15

// increase currentQ  3 === lenght go to end
// verify if is no more question (comparing the currectQ with the lenght of the QuestionsBank.length ) then you go t
//  if is not the last one go back to the displayQuestion
//function displayQuestion()

// function endQuiz()   clear the question area, stop the timer, show the form to get the initials
