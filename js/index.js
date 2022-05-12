const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let gameOver = false;
let carX = 250;
let intervalId = 0;
canvas.style.border = '2px solid black'
let isGoingLeft = false;
let isGoingRight = false;
let carSpeedValue = 3;

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
    canvas.style.display = 'block'
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(carImage, carX, 450, 100, 200)

    if (isGoingLeft) {
      if (carX > 0) {
        carX -= carSpeedValue;
      }
    } else if (isGoingRight) {
      if (carX < canvas.width - 250) {
        carX += carSpeedValue;
      }
    }
    if(gameOver === false) {
      requestAnimationFrame(startGame);
    } 
  }
};



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