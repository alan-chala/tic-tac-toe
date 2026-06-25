const startTheGameButton = document.getElementById('startGame');
const startTheGameContainer = document.querySelector('.start-game-container');

startTheGameButton.addEventListener('click', () => {
  startTheGameContainer.style.display = 'none';
  startTheGameContainer.setAttribute('aria-hidden', 'true');
});

const cellElements = document.querySelectorAll('.cell');

let turn = 'X';

cellElements.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.textContent = turn;
      cell.setAttribute('aria-label', turn);
      cell.setAttribute('aria-pressed', 'true');
      turn = turn === 'X' ? 'O' : 'X';
      document.querySelector('.show-turn').classList.toggle('right');
    }
  });
});

const restartGameButton = document.getElementById('restartGame');

restartGameButton.addEventListener('click', () => {
  cellElements.forEach((cell) => {
    cell.textContent = '';
    cell.setAttribute('aria-label', '');
    cell.setAttribute('aria-pressed', 'false');
  });
  turn = 'X';
  document.querySelector('.show-turn').classList.remove('right');
});

