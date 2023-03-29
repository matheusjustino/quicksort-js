async function generateRandomArrayOfNumbers(numberOfItems) {
  const randomArray = [];

  for (let i = 1; i <= numberOfItems; i++) {
      const randomNumber = Math.floor(Math.random() * 10 * numberOfItems); 
      randomArray.push(randomNumber);
  }

  return randomArray;
}

module.exports = {
  generateRandomArrayOfNumbers
}
