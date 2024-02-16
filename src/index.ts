import { DisplayMode, Engine, EX_VERSION, Loader } from "excalibur";
import { Player } from "./player";
import { loader } from "./resources";

class Game extends Engine {
  initialize() {
    const player = new Player();
    this.add(player);

    this.start(loader).then(() => {
      console.log(EX_VERSION);
    });
  }
}

const game = new Game({
  displayMode: DisplayMode.FitScreenAndFill
});

game.initialize();
