//Function for displaying high scores to webpage
function displayScores() {
  var quizScores = [];
  quizScores = JSON.parse(localStorage.getItem("scores"));
  if (quizScores !== null) {
    quizScores.sort((a, b) => {
      return a.score < b.score ? 1 : -1;
    });

    var scoreDisplay = document.querySelector("#scores-list");
    if (quizScores.length !== 0) {
      for (var i = 0; i < quizScores.length; i++) {
        var scoreDisplayed = quizScores[i].initials + "-" + quizScores[i].score;
        var ranking = document.createElement("li");
        ranking.textContent = scoreDisplayed;
        ranking.setAttribute("data-index", i);
        scoreDisplay.appendChild(ranking);
      }
    }
  }
}

displayScores();

//Click Event for Going back to the Quiz
var goBack = document.querySelector("#go-back");
goBack.addEventListener("click", function () {
  window.location.href = "index.html";
});

//Click Event for Clearing Scores from Local Storage and the page
var clearScores = document.querySelector("#clear-scores");
clearScores.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
