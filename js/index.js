const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'
canvas.style.backgroundColor = "#302c2c";

let move = false;
let carX = 250;
let intervalId = 0;

let isGoingLeft = false;
let isGoingRight = false;
let carSpeedValue = 7;

let topToButom = 0;
let topToButomTwo = 0;
let topToButomThree = 0;
let score = 0;

let roadImg = new Image ()
roadImg.src = '../images/road.png'

let startScreen = document.querySelector('.game-intro')

let carImage = new Image()
carImage.src = '../images/car.png'

let displayScreen = document.querySelector('.game-intro');


window.onload = () => {
  canvas.style.display = 'none'
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    displayScreen.style.display = 'none'
    canvas.style.display = 'flex'
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(carImage, carX, 450, 80, 160)
    ctx.beginPath();
    
    ctx.fillStyle = "red";
    ctx.fillRect(30, topToButom, 120, 20);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(180, topToButomTwo, 150, 20);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(380, topToButomThree, 100, 20);
    ctx.closePath();

    topToButom += 2.7
    if(topToButom >= 700) {
      topToButom = 0
    }

    topToButomTwo += 2.4
    if(topToButomTwo >= 700) {
      topToButomTwo = 0
    }

    topToButomThree += 3.3
    if(topToButomThree >= 700) {
      topToButomThree = 0
    }


    if (isGoingLeft) {
      if (carX > 0) {
        carX -= carSpeedValue;
      }
    } else if (isGoingRight) {
      if (carX < canvas.width - 100) {
        carX += carSpeedValue;
      }
    }
    if(move === false) {
      requestAnimationFrame(startGame);
    } 
  }
};

function drawScore() {
  ctx.beginPath();
  ctx.font = "30px sans-serif";
  ctx.fillStyle = "green";
  ctx.fillText(`Score : ${score}`, 10, 30);
  ctx.closePath();
}


function restart() {
  carX = 150;
  carY = 170;
  gameOver = false;
  score = 0;
  carDirectionX = carSpeedValue;
  carDirectionY = carSpeedValue;
  start();
}


function draw() {

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
}

  document.addEventListener("keydown", event => {
    console.log(event)
  if (event.code === "ArrowLeft") {
    isGoingLeft = true;
  }
  if (event.code === "ArrowRight") {
    isGoingRight = true;
  }
});

document.addEventListener("keyup", event => {
  isGoingLeft = false;
  isGoingRight = false;
});






















