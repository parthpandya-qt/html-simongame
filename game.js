var buttonColor=["red", "blue", "green", "yellow"];

var gamepattern=[];

var userClickedPattern=[];

var started=false;
var  level=0;

$(document).keypress(function(){
  if(!started){

    $("#level-title").text("level"+level);
    nextSequence();
    started=true;
  }

});

$(".btn").click(function()
  {

    var userChosenColor=$(this).attr("id");// samajh menahi aaya
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){

 if(gamepattern[currentLevel]===userClickedPattern[currentLevel]){
  console.log("success");

   if(userClickedPattern.length===gamepattern.length){
   setTimeout(function(){
    nextSequence();},1000);
    }
   
  }  else {
  console.log("wrong");

  playSound("wrong");
  $("body").addClass("game-over");

  
  setTimeout(function(){
    $("body").removeClass("game-over");
    
  },200);


  $("#level-title").text("Game Over,press Any Key To Restart");
  startOver();
  }
}  


function nextSequence(){

  userClickedPattern=[];

  level++;

    $("#level-title").text("Level " + level);

    var randomNumber=Math.floor(Math.random()*4);

    var randomChosenColor=buttonColor[randomNumber];
    gamepattern.push(randomChosenColor);
    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);


}
function playSound(name){
    var audio = new Audio("sounds/" +name + ".mp3");
  audio.play();
}

function  animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){

        $("#"+currentColor).removeClass("pressed");
    },100);
  }

  function startOver() {

   
    level = 0;
    gamePattern = [];
    started = false;
  }





