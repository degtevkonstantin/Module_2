// Реализуйте функцию, которая параметром принимает объект. 
// Выведите сформированную строку для браузера ('https://underscorejs.org') 
// с параметрами. Например, { a: 4, b: 8 } => "https://underscorejs.org?a=4&b=8".

// Input: ( "https://docs.google.com", { id: "terdh673bb8", limit: 5, offset: 0 } )

// Output: "https://docs.google.com?id=terdh673bb8&limit=5&offset=0"

const createUrl = (string, object) => {
  let counter = false;
  let resultStr = string
  
  for (const element in object) {
    if (counter)
      resultStr += '&' + element + '=' + object[element];
    else {
      resultStr += '?' + element + '=' + object[element];
      counter = true;
    };
  };

  return resultStr;
};

console.log(createUrl("https://docs.google.com",
  {
    id: "terdh673bb8",
    limit: 5,
    offset: 0
  }));