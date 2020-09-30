
function displayScores (){
    var quizScores = [];
    quizScores=JSON.parse(localStorage.getItem("scores"));
    sort((a, b) => { return a.score < b.score ? 1 : -1 } );    
    console.log(quizScores);
    var scoreDisplay = document.querySelector("scoreboard");
    for (var i=0; i < quizScores.length; i++){
       scoreDisplay.appendChild(quizScores[i]); 
    }

displayScores();

var goBack=document.querySelector("#go-back");
goBack.addEventListener("click", function() {
    window.location.href = "index.html";
})

var clearScores=document.querySelector("#clear-scores");
clearScores.addEventListener("click", function() {
    localStorage.clear();
})