// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
//  Реализуйте функцию, которая найдет сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.

// Output: 21

const sumArray = (array) => {
  const uniteArray = [];
  let result = 0;

  for (mass of array){
    for (element of mass){
      uniteArray.push(element)
    };
  };

  for (element of uniteArray){
    result += element;
  };

  return result;
}
console.log(sumArray([[1, 2, 3], [4, 5], [6]]));