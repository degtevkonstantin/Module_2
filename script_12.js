// Дан массив строк. Написать функцию, которая упорядочит массив по длине строк.

// Input: ["test", "education", "part", "2", "exceed.team"]

// Output: ["2", "part", "test", "education", "exceed.team"]

const formArray = (array) => {
  let counter = 0;
  let countArray = [];
  let resultArray = [];
  for (element1 of array) {
    counter = 0;
    for (element2 of element1) {
      counter++
    }
    countArray.push(counter)
  }

  let counter1 = 0;
  for (element of array) {
    for (index in countArray) {
      counter1 = 0;
      for (element2 of countArray) {
        if (countArray[index] < element2) {
          counter1++
        }
      }
      if (counter1 == 0) {
        resultArray.push(array[index])
        delete array[index];
        delete countArray[index];
      }
    }
  }

  return resultArray
}

console.log(formArray(["test", "education", "part", "2", "exceed.team", 'qw']));