const startTheGameButton = document.getElementById('startGame');
const startTheGameContainer = document.querySelector('.start-game-container');

startTheGameButton.addEventListener('click', () => {
  startTheGameContainer.style.display = 'none';
  startTheGameContainer.setAttribute('aria-hidden', 'true');
});