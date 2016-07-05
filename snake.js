const squareSize = 10;

class Game {
  constructor() {
    let canvas = document.getElementById('screen');
    this.ctx = canvas.getContext('2d');

    this.start();
  }

  start() {
    let snake = new Snake(this);
    let food = new Food(this);
    snake.draw();
    food.draw();

    this.keyboarder();
  }

  draw(posX, posY, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(posX, posY, squareSize, squareSize);
  }

  keyboarder() {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp':
          console.log('Atas');
          break;
        case 'ArrowRight':
          console.log('Kanan');
          break;
        case 'ArrowDown':
          console.log('Bawah');
          break;
        case 'ArrowLeft':
          console.log('Kiri');
          break;
      }
    })
  }
}

class Food {
  constructor(game) {
    this.game = game;
  }

  draw() {
    this.game.draw(300, 300, 'red');
  }
}

class Snake {
  constructor(game) {
    this.game = game;
  }

  draw() {
    this.game.draw(200, 200, 'green');
  }
}


window.addEventListener('load', () => {
  let game = new Game();
})