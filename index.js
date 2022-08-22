// Exercise 01

console.log("  -----------------------------------");
console.log("   ++++++++++ 01 Exercise ++++++++++");

function sumOfArray(array) {
  if (array.length === 1) {
    return array[0];
  }
  if (array.length === 0) {
    return 0;
  }
  let value = array[0] + sumOfArray(array.slice(1, array.length));
  return value;
}
const arrayOfNum = [1, 2, 3, 4, 5, 6];

// const sum = sumOfArray();

console.log(sumOfArray(arrayOfNum)); // return 21
