function toggleButton(label) {
  for (let i = 1; i <= 3; i++) {
    const buttonElement = document
      .querySelector
        (`.js-${i}-button`)

    if (label === i) {
      if (buttonElement.classList
        .contains('is-toggled')) {
        buttonElement.classList
          .remove('is-toggled')
      } else {
        buttonElement.classList
          .add('is-toggled')
      }
    } else {
        if (buttonElement.classList
      .contains('is-toggled')) {
      buttonElement.classList
      .remove('is-toggled')
      }
    } 
  }
}