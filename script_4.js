// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
//  Реализуйте функцию, которая найдет сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.

// Output: 21

const sumArray = (array) => {
  let allArray = [];
  for (mass of array){
    for (element of mass){
      allArray.push(element)
    };
  };

  let result = 0;
  for (counter = 0; counter < allArray.length; counter++){
    result += allArray[counter];
  };

  return result;
}
console.log(sumArray([[1, 2, 3], [4, 5], [6]]));