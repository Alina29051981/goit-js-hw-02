function makeTransaction(quantity, pricePerDroid, customerCredits) {
  if ((totalPrice = customerCredits)) {
    return `Insufficient funds!`;
  } else {
    return `You ordered ${quantity} droids worth ${
      quantity * pricePerDroid
    } credits!`;
  }
}
console.log(makeTransaction(5, 3000, 23000));
