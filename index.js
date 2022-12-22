var buttonColor = ["green", "red", "yellow", "blue"];
var sq = [];
var usersq = [];
var i = 0;
var flag = false;
$(document).keypress(function() {
  if(flag == false) {
    exesq(genSq());
    flag = true;
  }
})

$(".btn").click(function() {
  var b = $(this).attr("id");
  animateButton(b);
  usersq.push(b);
  checksq();
})

function checksq() {
  var l = usersq.length - 1;
  if(usersq[l] != sq[l]) {
    $("h2").text("Game Over, press any key to start.");
    var a = new Audio("sounds/wrong.mp3");
    a.play();
    i = 0;
    sq = [];
    flag = false;
  } else {
    playaudio(usersq[l]);
  }
  if(l + 1 == i) {
    setTimeout(function() {
      exesq(genSq());
    }, 750);
  }
}

function genSq() {
  var giveColor = Math.floor(Math.random() * 4);
  sq.push(buttonColor[giveColor]);
  return giveColor;
}

function exesq(c) {
  i++;
  $("h2").text("Level " + i);
  usersq = [];
  animateButton(buttonColor[c]);
  playaudio(buttonColor[c]);
}


function animateButton(b) {
  $("#" + b).addClass("pressed");
  setTimeout(function() {
    $("#" + b).removeClass("pressed");
  }, 100);
}

function playaudio(b) {
  var audio = new Audio("sounds/" + b + ".mp3");
  audio.play();
}
