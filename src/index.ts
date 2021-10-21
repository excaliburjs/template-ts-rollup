import { Engine, EX_VERSION, Loader } from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";

class Game extends Engine {
  initialize() {
    const player = new Player();
    this.add(player);

    const loader = new Loader();
    loader.addResource(Resources.Sword);
    this.start(loader).then(() => {
      console.log(EX_VERSION);
    });
  }
}

const game = new Game();

game.initialize();
