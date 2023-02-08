// Напишите функцию, которая добавит в первый массив только те значения, 
// которые присутствуют во втором, но нет в первом

// Input: ( [5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2], [8, 5, 7, -3, 6, 3, 1, 4, 2] )

// Output: [5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2, 6, 1, 4]

const arr1 = [5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2];
const arr2 = [8, 5, 7, -3, 6, 3, 1, 4, 2];

const unitUniqueArray = (array, array2) => {
  for (element of array2) {
    array.push(element);
  }

  let counter2 = 0, resultArray = [];
  for (element of array) {
    let counter1 = 0;
    while (counter1 < counter2 && resultArray[counter1] !== element) {
      counter1++;
    };

    if (counter1 == counter2) {
      resultArray[counter2++] = element;
    };
  };

  return resultArray;
}

console.log(unitUniqueArray([5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2], [8, 5, 7, -3, 6, 3, 1, 4, 2]))