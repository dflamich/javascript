function calculateCost () {
  let productPrice = document
    .querySelector('.js-price-input')
    .value

  let jsCostClass = document
      .querySelector('.js-cost')
        .classList
  if (productPrice > 0 
    && productPrice <40 ) {
    productPrice = Number   (productPrice) + 10;
    if (jsCostClass.contains
      ('error-message')) {
      jsCostClass.remove('error-message')
    }
  } else if (productPrice <= 0) {
          jsCostClass.add('error-message')
    document.querySelector('.js-cost')
      .innerHTML = 'Error: Price must be larger than $0'
  }
  
  productPrice = productPrice.toFixed(2)

  /* 
  Rounding to 2 digits is of course also possible by taking the number 100x, then using Math.round() and lastly dividing by 100, but that is slightly longer
  */
  document.querySelector('.js-cost')
  .innerHTML = `The total cost of the order is $${productPrice}.` 
}

function enterKeyDown (event) {
if (event.key === 'Enter') {
  calculateCost()
}
}