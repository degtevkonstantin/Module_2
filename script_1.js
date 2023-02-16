// Напишите функцию, которая добавит в первый массив только те значения, 
// которые присутствуют во втором, но нет в первом

// Input: ( [5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2], [8, 5, 7, -3, 6, 3, 1, 4, 2] )

// Output: [5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2, 6, 1, 4]

const arr1 = [5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2];
const arr2 = [8, 5, 7, -3, 6, 3, 1, 4, 2];

const unitUniqueArray = (array, array2) => {
  let counter = 0;

  for (const element2 of array2) {
    counter = 0;
    for (const element of array){
      if (element2 == element){
        counter++;
      };
    };

    if (counter == 0){
      array.push(element2);
    }
  }

  return array;
}

console.log(unitUniqueArray([5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2], [8, 5, 7, -3, 6, 3, 1, 4, 2]))