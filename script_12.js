// Дан массив строк. Написать функцию, которая упорядочит массив по длине строк.

// Input: ["test", "education", "part", "2", "exceed.team"]

// Output: ["2", "part", "test", "education", "exceed.team"]

const formArray = (array) => {
  const countArray = [];
  const resultArray = [];

  for (const element of array){
    countArray.push(element.length)
  }

  let counter1 = 0;
  for (const element of array) {
    for (const index in countArray) {
      counter1 = 0;
      for (const element2 of countArray) {
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