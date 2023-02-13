// Дан массив чисел. Каждое число в массиве встречается четное количество раз,
// кроме одного. Реализуйте и экспортируйте функцию по умолчанию,
// которая принимает массив чисел и возвращает число, которое встречается 
// нечетное количество раз.

// Input: [5, 8, 2, 4, 5, 4, 2, 4, 2, 5, 2, 4, 5]

// Output: 8

const uniqueElement = (array) => {
  const resultArray = [];
  let counter1 = 0;

  for (let item1 of array) {
    for (let item2 of array) {
      if (item1 === item2) {
        counter1++;
      };
    };

    if (counter1 % 2 == 1) {
      resultArray.push(item1);
      counter1 = 0;
    } else {
      counter1 = 0;
    }
  };

  array = resultArray;
  let counter2 = 0;
  for (element of array) {
    let counter1 = 0;
    while (counter1 < counter2 && resultArray[counter1] !== element) {
      counter1++;
    };

    if (counter1 == counter2) {
      resultArray[counter2++] = element;
    };
  };

  return resultArray[0];
}

console.log(uniqueElement([5, 8, 2, 4, 5, 4, 2, 4, 2, 5, 2, 4, 5, 5, 8]));