import GoblinGame from "../GoblinGame/GoblinGame";
import goblinImage from "../../img/goblin.png";

export default function startGame() {
  new GoblinGame({
    width: 4,
    height: 4,
    image: goblinImage,
  });
}

document.addEventListener("DOMContentLoaded", startGame);
