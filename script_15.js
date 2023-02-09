// Написать функцию фильтрации коллекции, 
// где у объекта есть свойство с конкретным значением.

// Input: [
//    {name: "test", age: 45, country: "RF", tel: "+79846466744"},
//    {name: "test1", age: 23, country: "RF", tel: "+79464747484"},
//    {name: "test2", age: 18, country: "RF", tel: "+376483876346"}
// ]

// Отфильтровать значения, где age равен 23

// Output: [
//    {name: "test1", age: 23, country: "RF", tel: "+79464747484"}
// ]

const filterObjects = (array, object) => {
  resultArr = [];
  let counter = 0;
  for (element of array){
    counter = 0;
    for (property in element){
      if (element[property] == object[property]){
        counter++
      };
    };
    if (counter > 0){
      resultArr.push(element);
    };
  };

  return resultArr;
};

console.log(filterObjects([
  {name: "test", age: 45, country: "RF", tel: "+79846466744"},
  {name: "test1", age: 23, country: "RF", tel: "+79464747484"},
  {name: "test2", age: 18, country: "RF", tel: "+376483876346"},
], {age: 23}))