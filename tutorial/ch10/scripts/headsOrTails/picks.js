function playerPick(pick) {
  let result = ''

  const flip = computerPick()

  if (pick === flip) {
    result = 'You win.'
    score.wins ++
  } else {
    result = 'You lose.'
    score.losses ++
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  updateResultElement(result);
  updatePickElement(pick, flip);
}

function computerPick() {
  x = Math.random();
  return x >= 0 && x < 1/2 ? 'Heads' : 'Tails'
}