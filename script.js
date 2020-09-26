$(document).ready(function(){
var QuestionBank = [
        {
          question: "Who invented JavaScript?",
          answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
          },
          correctAnswer: "c"
        },
        {
          question: "Which one of these is a JavaScript package manager?",
          answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
          },
          correctAnswer: "c"
        },
        {
          question: "Which tool can you use to ensure code quality?",
          answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
          },
          correctAnswer: "d"
        }
      ];

// Event for displaying high scores
$("#high-scores").on("click", function(){
    window.location.href = "scores.html";
});

//Creating timer for game
var secondsLeft=75;
var timeEl=document.getElementById('timer');
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = ("Timer: "+ secondsLeft);
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

// Event for displaying questions to question div

$("#start").on("click", function(){
    var QuestionDiv=document.getElementById('question-box');
    QuestionBank.forEach(function (questions, i) {
        $("#question-box").empty();
        QuestionDiv.append(questions.question);
        QuestionDiv.append("<br/>"+ questions.answers.a);
        QuestionDiv.append("<br/>"+ questions.answers.b); 
        QuestionDiv.append("<br/>"+ questions.answers.c);   
        QuestionDiv.append("<br/>"+questions.answers.d);
    });

});
});