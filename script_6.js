// Напишите функцию, которая сгруппирует объекты заказов по имени.

// Input: [
//   { name: "test", price: 200 },
//   { name: "test1", price: 300 },
//   { name: "test", price: 100 },
//   { name: "test", price: 600 }
// ]

// Output: [
//   { name: "test", price: 900 },
//   { name: "test1", price: 300 }
// ]

const formByName = (array) => {
  const resultArray = [];
  let counter = 0;

  for (element1 of array) {
    for (element2 of resultArray) {
      if (element2.name === element1.name) {
        element2.price += element1.price
        counter++
      }
    }

    if (counter == 0) {
      resultArray.push(element1);
    }
  }

  return resultArray;
}

console.log(formByName([
  { name: "test", price: 200 },
  { name: "test1", price: 300 },
  { name: "test", price: 100 },
  { name: "test", price: 600 },
]));