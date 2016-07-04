class Game {
  constructor() {
  }

  start() {
  }
}

class Snake {
  constructor() {
    this.width = 10;
    this.height = 10;
  }

  drawBody() {
    var canvas = document.getElementById('screen');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(200, 200, this.width, this.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(300, 300, this.width, this.height);
  }
}

window.addEventListener('load', function() {
  let snake = new Snake();
  snake.drawBody();
})