var canvas;
var canvasContext;
var ballx = 5;
var bally = 5;
var ballxSpeed = 5;
var ballySpeed = 5;
//paddles
const PADDLE_HEIGHT = 100;
var paddle1y = 250;

function calculateMousePosition(event) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = event.clientX - rect.left - root.scrollLeft;
  var mouseY = event.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
}

window.onload = function() {
  console.log("hello");
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  drawEverything();
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 10);
  canvas.addEventListener("mousemove", function(event) {
    var mousepos = calculateMousePosition(event);
    paddle1y = mousepos.y-(PADDLE_HEIGHT/2);
  });
};
function ballReset(){
  ballx=canvas.width/2;
  bally=canvas.height/2;
}
function moveEverything() {
  ballx = ballx + ballxSpeed;
  bally = bally + ballySpeed;

  if (ballx > canvas.width) {
    ballxSpeed = -ballxSpeed;
  }
  if (ballx < 0) {
    ballxSpeed = -ballxSpeed;
  }
  if (bally < 0) {
    ballySpeed = -ballySpeed;
  }
  if (bally > canvas.height) {
    ballySpeed = -ballySpeed;
  }
}

function drawEverything() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
  colorRect(0, paddle1y, 10, 100, "red");
  colorCircle(ballx, bally, 10, "blue");
  //circle
}
function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}
