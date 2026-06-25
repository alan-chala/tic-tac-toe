const startGameButton = document.getElementById("startGame");
const startGameContainer = document.querySelector(".start-game-container");
const restartGameButton = document.getElementById("restartGame");
const winnerMessage = document.querySelector(".winner-message");
const cellElements = document.querySelectorAll(".cell");

let turn = "X";

let isGameActive = true;

const winnerPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGameButton.addEventListener("click", () => {
  startGameContainer.style.display = "none";
  startGameContainer.setAttribute("aria-hidden", "true");
});

cellElements.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent === "" && isGameActive) {
      cell.textContent = turn;
      cell.setAttribute("aria-label", turn);
      cell.setAttribute("aria-pressed", "true");
      turn = turn === "X" ? "O" : "X";
      document.querySelector(".show-turn").classList.toggle("right");
      checkWinner();
    }
  });
});

const checkWinner = () => {
  for (const pattern of winnerPatterns) {
    const [a, b, c] = pattern;
    if (
      cellElements[a].textContent &&
      cellElements[a].textContent === cellElements[b].textContent &&
      cellElements[a].textContent === cellElements[c].textContent
    ) {
      winnerMessage.textContent = `Player ${cellElements[a].textContent} wins!`;
      isGameActive = false;
    }
  }
  
  winnerMessage.textContent = winnerMessage.textContent || (Array.from(cellElements).every(cell => cell.textContent) ? "It's a draw!" : "");
};

restartGameButton.addEventListener("click", () => {
  cellElements.forEach((cell) => {
    cell.textContent = "";
    cell.setAttribute("aria-label", "");
    cell.setAttribute("aria-pressed", "false");
  });
  turn = "X";
  winnerMessage.textContent = "";
  document.querySelector(".show-turn").classList.remove("right");
  isGameActive = true;
});
