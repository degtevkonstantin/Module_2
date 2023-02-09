// Дано число. Напишите функцию, которая сложит его цифры.
// Если сумма получилась более 9-ти, опять сложите его цифры. 
// И так, пока сумма не станет однозначным числом (9 и менее).

// Input: 345

// Output: 3

const sumNumber = (number) => {
  number = String(number);
  const array = number.split('');
  let result = 0;
  const numArray = [];

  for (element of array) {
    numArray.push(Number(element));
  };

  for (element of numArray) {
    result += element;
  };

  if (result > 9) {
    return sumNumber(result);
  } else {
    return result;
  };
};

console.log(sumNumber(345));
