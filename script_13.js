// Реализуйте функцию. На вход функция принимает массив значений из 0 и 1. 
// Верните объект сгруппированных данных {"0": 10, "1": 5}

// Input: [0, 0, 0, 1, 1, 0 , 1, 1, 1, 0, 0, 1, 1, 0, 1]

// Output: {
//   "0": 7,
//   "1": 8
// }

const countElements = (array) => {
  let count0 = 0;
  let count1 = 0;
  for (element of array) {
    if (element == 0){
      count0++;
    }else {
      count1++;
    }
  }
  
  return {
    '0': count0,
    '1': count1
  }
}

console.log(countElements([0, 0, 0, 1, 1, 0 , 1, 1, 1, 0, 0, 1, 1, 0, 1]));
