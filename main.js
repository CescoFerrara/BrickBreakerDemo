import './style.css'
import Sprite from "./model/Sprite.js";
import Ball from "./model/Ball.js";
import Paddle from "./model/Paddle.js";

const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");

const blueBall = new Ball(canvas.width/2, canvas.height/2, 10, 10, "blue", 2, -2);

const paddle = new Paddle(canvas.width/2, canvas.height - 10, 80, 10, "blue");


let gameGoing = true;
function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);


  paddle.draw(ctx);
  paddle.move(canvas.width);

  blueBall.draw(ctx);
  blueBall.move();
  gameGoing = blueBall.bounce(canvas.width, canvas.height);

  blueBall.collide(paddle);

  if (gameGoing) {
    window.requestAnimationFrame(draw);
  } else {
    window.alert("Game over!");
  }
}

draw();