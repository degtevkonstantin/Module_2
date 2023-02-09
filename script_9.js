// Напишите функцию, которая удалит из первого массива все значения, 
// которые указаны во втором массиве.

// Input: ( [5, 7, 2, -1, 7, 8, 3, 6, 2, 9, 4, -7], [2, -1, 9] )

// Output: [5, 7, 7, 8, 3, 6, 4, -7]

const deleteElemArray = (array1, array2) => {
  let resultArray = [];
  for (element2 of array2){
    for (index in array1){
      if (array1[index] == element2){
        array1[index] = undefined;
      };
    };
  };

  for (element of array1){
    if (element !== undefined){
      resultArray.push(element);
    };
  };
  
  return resultArray;
};

console.log(deleteElemArray([5, 7, 2, -1, 7, 8, 3, 6, 2, 9, 4, -7], [2, -1, 9]))
