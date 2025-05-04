let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};

document.querySelector('.js-score')
.innerHTML = `The current score is: Wins: ${score.wins}, Losses: ${score.losses}. To reset the score press 'Reset score', to play the game pick 'Heads' or 'Tails' .`