const repeatNumbers = function(data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    let numberToRepeat = item[0];
    let numberOfRepeatation = item[1];

    for (let j = 0; j < numberOfRepeatation; j++) {
      result += numberToRepeat;
    }
  }
  return result;
};

const data = [
  [1, 2],
  [2, 4]
];
console.log(repeatNumbers(data));