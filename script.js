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
  var timerInterval = setInterval(function () {
    
    timeEl.textContent = "Timer: " + secondsLeft;
  
    if (secondsLeft==0 || currentQ===QuestionBank.length){
      clearInterval(timerInterval);
      return endQuiz;
    }
    secondsLeft--;
  }, 1000);
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
    if (answer === QuestionBank[currentQ].correctAnswer) {
      secondsLeft = secondsLeft + 5;
      responseDiv.textContent = "That is correct!!!";
      currentQ++;
    } else {
      secondsLeft = secondsLeft - 5;
      responseDiv.textContent = "That is incorrect.";
      currentQ++;
    }
    if (currentQ === QuestionBank.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }
  function endQuiz() {
//Clearing or changing the question display or response elements after quiz is complete
    userScore=secondsLeft;
    questionEl.textContent = "Quiz completed!";
    answer1El.textContent = "";
    answer2El.textContent = "Your final score is " + userScore;
    answer3El.textContent = "";
    answer4El.textContent = "";

    //Creating the input elements to collect
    var userInitials = document.createElement("input");
    answer4El.textContent="User Initials";
    userInitials.setAttribute("type", "text");
    answer4El.appendChild(userInitials);
    var submit = document.createElement("button");
    submit.innerHTML = "Submit";
    answer4El.appendChild(submit);
    responseDiv.textContent="";
    submit.addEventListener("click", function (){
      localStorage.setItem("User", userInitials);
      localStorage.setItem("Score", userScore);
      window.location.href = "scores.html";
    }
  }
  })