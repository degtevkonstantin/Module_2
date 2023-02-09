// На вход подается массив со значениями. 
// Нужно написать функцию, которая выведет массив уникальных элементов 
// (нет повторений в поданном массиве).

// Input: [5, 7, 6, 2, 8, 3, 5, 6, 2, 98, 13]

// Output: [7, 8, 3, 98, 13]

const createArrayUniqueElements = (array) => {
  let resultArray = [];
  let counter1 = 0;
  for (let item1 of array) {
    for (let item2 of array) {
      if (item1 === item2) {
        counter1++;
      }
    }

    if (counter1 === 1) {
      resultArray.push(item1);
      counter1 = 0;
    } else {
      counter1 = 0;
    }
  }

  return resultArray;
}

console.log(createArrayUniqueElements([5, 7, 6, 2, 8, 3, 5, 6, 2, 98, 13]));