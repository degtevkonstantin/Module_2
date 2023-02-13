// Дано число, например 31. Напишете функцию, которая проверит, что 
// это число не делится ни на одно другое число кроме себя самого и единицы.
//  То есть в нашем случае нужно проверить, что число 31 не делится на 
//  все числа от 2 до 30. Если число не делится - выведите 'false', 
//  а если делится - выведите 'true'.

// Input: 31

// Output: false

// Input: 4

// Output: true


const checkSimpleNumber = (number) => {
  let result = false;
  const dividers = [2, 3, 5, 7];
  for (const element of dividers){
    if (number % element == 0 && element !== number){
      result = true;
    }
  }
  return result;
};

console.log(checkSimpleNumber(31));
console.log(checkSimpleNumber(10));