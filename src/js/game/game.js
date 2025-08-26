export default function playingGame() {
  let gameRuning = true;
  let activeSpace = 1;

  const getSpace = (index) => document.getElementById(`space${index}`);
  const deactivateSpace = (index) => (getSpace(index).className = "space");
  const activateSpace = (index) =>
    (getSpace(index).className = "space evil_spirit");

  const moveSpirit = () =>
    setTimeout(() => {
      if (!gameRuning) {
        return;
      }
      deactivateSpace(activeSpace);
      activeSpace = Math.floor(1 + Math.random() * 16);
      activateSpace(activeSpace);
      moveSpirit();
    }, 800);

  activeSpace = Math.floor(1 + Math.random() * 16);
  activateSpace(activeSpace);
  moveSpirit();
}
