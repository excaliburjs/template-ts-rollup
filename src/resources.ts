import { ImageSource, Loader, Resource, } from "excalibur";
import sword from "./images/sword.png";

const Resources = {
  Sword: new ImageSource(sword),
} as const;

const loader = new Loader();

for (const res of Object.values(Resources)) {
  console.log(res);
  loader.addResource(res);
}

export { Resources, loader }