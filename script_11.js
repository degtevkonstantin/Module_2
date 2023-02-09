// Отфильтровать массив чисел по максимальному и минимальному числам. 
// Нужно реализовать функцию, которая в параметрах всегда получает массив. 
// И на выбор следующие параметры:

// 1) только минимальный элемент;

// 2) только максимальный элемент;

// 3) и минимальный, и максимальный элемент;

// Если пользователю приходит только минимальный, то нужно вывести все значения,
// которые от минимального и выше. Если пользователю приходит только
//  максимальный элемент, то нужно вывести все значения до максимального. 
//  Если приходят оба значения вывести все значения от минимального 
//  и до максимального элемента.

// Input: ([-4, 6, 7, 2, -5, 8], 3, null)
// Output: [6, 7, 8]

// Input: ([-4, 6, 7, 2, -5, 8], null, 6)
// Output: [-4, 6, 2, -5]

// Input: ([-4, 6, 7, 2, -5, 8], -1, 5)
// Output: [2]

const segmentArray = (array, number1, number2) => {
  const resultArray = [];

  if (number2 == null) {
    for (element of array) {
      if (element >= number1) {
        resultArray.push(element);
      };
    };
  } else if (number1 == null) {
    for (element of array) {
      if (element <= number2) {
        resultArray.push(element);
      };
    }
  } else ;{
    for (element of array) {
      if (element <= number2 && element >= number1) {
        resultArray.push(element);
      };
    };
  };
  
  return resultArray;
}

console.log(segmentArray([-4, 6, 7, 2, -5, 8], 3, null));
console.log(segmentArray([-4, 6, 7, 2, -5, 8], null, 6));
console.log(segmentArray([-4, 6, 7, 2, -5, 8], -1, 5));
