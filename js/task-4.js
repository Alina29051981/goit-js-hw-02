function getShippingCost(country) {
  const price = 0;
  if (country === "China") {
    let price = 100;
  } else if (country === "Chile") {
    let price = 250;
  } else if (country === "Australia") {
    let price = 170;
  } else if (country === "Jamaica") {
    let price = 120;
  } else {
    return "Sorry, there is no delivery to your country";
  }

  `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
