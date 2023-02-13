// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
//  Реализуйте функцию, которая найдет сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.

// Output: 21

const sumArray = (array) => {
  const uniteArray = [];
  let result = 0;

  for (const array1 of array){
    for (const element of array1){
      uniteArray.push(element)
      result += element;
    };
  };
  return result;
}
console.log(sumArray([[1, 2, 3], [4, 5], [6]]));