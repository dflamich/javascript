function updateScoreElement () {
  const scoreElement = document
    .querySelector('.js-score');

  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}.`
}

function updateResultElement (result) {
  const flipResultElement = document
    .querySelector('.js-result');
  if (result === 'reset') {
    flipResultElement.innerHTML = `You have reset the score.`
  } else {
    flipResultElement.innerHTML =  `${result}`
  }
}

function updatePickElement (pick, flip) {
  const pickElement = document
  .querySelector('.js-picks')
  if (!pick) {
    pickElement.innerHTML = '';
  } else {
    pickElement.innerHTML = 
      `You picked: 
      <img
      src="images/coin-${pick}-icon.webp"
      class="pick-icon"
      >  
      The result of the flip: 
      <img
      src="images/coin-${flip}-icon.webp"
      class="pick-icon"
      >` 
  }
}