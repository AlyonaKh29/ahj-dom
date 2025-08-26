import playingGame from "../game/game";
import turnOnTheСounter from "../task/task";

export default function startGame() {
  playingGame();
  turnOnTheСounter();
}

document.addEventListener("DOMContentLoaded", startGame);
