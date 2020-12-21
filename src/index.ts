import { Engine } from 'excalibur'

class Game extends Engine {
  initialize() {
    this.start();
  }
}

const game = new Game();

game.initialize()