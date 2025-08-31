export default class GoblinGame {
  constructor(options) {
    this.sizeWidth = options.width;
    this.sizeHeight = options.height;
    this.currentCellId = null;
    this.character = null;
    this.intervalId = null;
    this.image = options.image;
    this.mainElement = document.querySelector(".content");

    this.createGameField();
    this.createCharacter();
    this.startMoving();
  }

  createGameField() {
    // Создаем игровое поле с ячейками.
    const container = document.createElement("div");
    container.classList.add("expelling-game");
    this.mainElement.append(container);

    for (let i = 1; i <= this.sizeWidth * this.sizeHeight; i++) {
      const cell = document.createElement("div");
      cell.id = `space${i}`;
      cell.classList.add("space");
      container.append(cell);
    }
  }

  createCharacter() {
    // Создаем персонажа, размещаем его в случайной ячейке.
    this.character = document.createElement("img");
    this.character.src = this.image;
    this.character.classList.add("character");

    this.currentCellId = this.getRandomCellId();
    const cell = this.getCell(this.currentCellId);
    cell.append(this.character);
    this.styleCharacter(this.currentCellId);
  }

  getCell(index) {
    // Получаем ячейку по id.
    return document.getElementById(`space${index}`);
  }

  getRandomCellId() {
    // Генерирует случайный id, отличающийся от текущего.
    let newId;
    do {
      newId = Math.floor(1 + Math.random() * this.sizeWidth * this.sizeHeight);
    } while (newId === this.currentCellId);
    return newId;
  }

  moveCharacter() {
    // Удаляем персонажа из текущей ячейки и перемещаем в другую.
    const currentCell = this.getCell(this.currentCellId);
    if (this.character.parentNode === currentCell) {
      currentCell.removeChild(this.character);
      this.styleCharacter(this.currentCellId);
    }
    this.currentCellId = this.getRandomCellId();
    const newCell = this.getCell(this.currentCellId);
    newCell.append(this.character);
    this.styleCharacter(this.currentCellId);
  }

  styleCharacter(cellId) {
    // Выделяем занятую персонажем ячейку стилями.
    const cell = this.getCell(cellId);
    if (cell.querySelector(".character")) {
      cell.classList.add("evil_spirit");
    } else {
      cell.classList.remove("evil_spirit");
    }
  }

  startMoving(interval = 800) {
    // Запускаем автоматическое перемещение персонажа.
    this.intervalId = setInterval(() => {
      this.moveCharacter();
    }, interval);
  }
}
