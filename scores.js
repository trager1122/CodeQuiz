
function displayScores (){
    var quizScores = [];
    quizScores=JSON.parse(localStorage.getItem("scores"));
    quizScores.sort(a,b => { return a.userScore < b. ? 1 : -1 } )
    var scoreDisplay = document.querySelector("scoreboard");
    for (var i=0; i < quizScores.length; i++){
        var paragraph = document.createElement("p");
        var paragraphId= i.toString();
        paragraph.id= paragraphId;
        paragraph
        
}
displayScores();

var goBack=document.querySelector("#go-back");
goBack.addEventListener("click", function() {
    window.location.href = "index.html";
})

var clearScores=document.querySelector("#clear-scores");
clearScores.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})