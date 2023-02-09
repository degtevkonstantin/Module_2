// Реализуйте функцию, которая параметром принимает объект. 
// Выведите сформированную строку для браузера ('https://underscorejs.org') 
// с параметрами. Например, { a: 4, b: 8 } => "https://underscorejs.org?a=4&b=8".

// Input: ( "https://docs.google.com", { id: "terdh673bb8", limit: 5, offset: 0 } )

// Output: "https://docs.google.com?id=terdh673bb8&limit=5&offset=0"

const formString = (string, object) => {
  let counter = false;
  for (element in object) {
    if (counter == true)
      string += '&' + element + '=' + object[element]
    else {
      string += '?' + element + '=' + object[element];
      counter = true;
    };
  };

  return string;
};

console.log(formString("https://docs.google.com",
  {
    id: "terdh673bb8",
    limit: 5,
    offset: 0
  }));