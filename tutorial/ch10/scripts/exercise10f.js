function toggleButton(label) {
  const buttonElement = document
    .querySelector
      (`.js-${label}-button`);

  if (buttonElement.classList
    .contains('is-toggled')) {
    buttonElement.classList
      .remove('is-toggled')
  } else {
    buttonElement.classList
      .add('is-toggled')
  }
  
  
}