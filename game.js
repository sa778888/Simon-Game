var gamePattern=[];
var level=1;
var started=false;
var userclick=[];
var buttonColor=["red","blue","green","yellow"];
$(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  $(".btn").click(function(){
    var userChoice=$(this).attr("id");
    userclick.push(userChoice);
    var audio = new Audio("sounds/" +userChoice + ".mp3");
    audio.play();
    animate(userChoice);
    check(userclick.length-1);
});
function animate(current) {
$("#"+current).addClass("pressed");
setTimeout(function() {
    $("#" + current).removeClass("pressed");
  }, 100);
  }
function check(levelcurr){
    if (gamePattern[levelcurr] === userclick[levelcurr]) {

        if (userclick.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 800);
  
        }
  
      } else {
  
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    
}
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
function nextSequence(){
    $("#level-title").text("Level " + level);
    level++;

        userclick=[];
        var randomNumber=Math.floor(Math.random()*4);
        var randomColor=buttonColor[randomNumber];
        gamePattern.push(randomColor);
        setTimeout(function(){
        $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio("sounds/"+randomColor+".mp3");
        audio.play();},600);
    }
