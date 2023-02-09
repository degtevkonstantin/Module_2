// Напишите функцию, которая находит наиболее часто встречаемый элемент массива.

// Input: [6, 3, 8, 2, 6, 8, 2, 5, 7, 2, 6, 8, 6, 2, 6]

// Output: 6

const frequentElement = (array) => {
  let counter = 0;
  let maxCounter = 0;
  let maxElement = 0;
  for (element1 of array) {
    counter = 0;
    for (element2 of array) {
      if (element1 == element2) {
        counter++;
      };
    };

    if (counter > maxCounter) {
      maxCounter = counter;
      maxElement = element1;
    }
  }

  return maxElement;
}

console.log(frequentElement([6, 3, 8, 2, 6, 8, 2, 5, 7, 2, 6, 8, 6, 2, 6]));
