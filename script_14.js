// Напишите функцию, которая возвращает true, если в массиве есть все значения, 
// которые указаны во втором.

// Input: ( [4, 8, 1, 9, -3, 7, 2, 8, 4, -6, 3, 8, 4, 6, 1, 9, -4], [3, 7, -6] )

// Output: true

// Input: ( [4, 8, 1, 9, -3, 7, 2, 8, 4, -6, 3, 8, 4, 6, 1, 9, -4], [9, 7, -8] )

// Output: false

const compareArrays = (array1, array2) => {
  let counter = 0;
  result = true;
  for (element1 of array2){
    counter = 0;
    for (element2 of array1){
      if (element1 == element2){
        counter++
      }
    }
    if (counter == 0){
      result = false
    }
  }
  
  return result;
}

console.log(compareArrays([4, 8, 1, 9, -3, 7, 2, 8, 4, -6, 3, 8, 4, 6, 1, 9, -4], [3, 7, -6]))
