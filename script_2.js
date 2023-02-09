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
  const array = [];
  for (counter = 1; counter < number; counter++) {
   array.push(counter)
  };

  array.shift();
  for (element of array) {
    if (number % element == 0){
      return true
    }
  }

  return false;
};

console.log(checkSimpleNumber(31));
console.log(checkSimpleNumber(4))