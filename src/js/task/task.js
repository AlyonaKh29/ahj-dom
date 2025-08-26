export default function turnOnTheСounter() {
  let dead = document.getElementById("dead");
  let lost = document.getElementById("lost");

  let getSpace = (index) => document.getElementById(`space${index}`);
  let checkCounter = () => {
    if (lost.textContent == 5) {
      gameOver("Вы растеряли хватку в мастерстве изгнания злых духов(...");
    } else if (dead.textContent == 10) {
      gameOver("Победа! Сегодня можно спать спокойно!");
    }
  };

  let gameOver = (message) => {
    alert(message);
    dead.textContent = 0;
    lost.textContent = 0;
  };

  for (let i = 1; i <= 16; i++) {
    let space = getSpace(i);
    space.onclick = () => {
      let evilSpirit = space.className.includes("evil_spirit");
      if (evilSpirit) {
        dead.textContent = Number(dead.textContent) + 1;
      } else {
        lost.textContent = Number(lost.textContent) + 1;
      }
      checkCounter();
    };
  }
}
