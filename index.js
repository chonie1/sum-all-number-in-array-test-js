function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;

  if (!array.length) return sum;

  for (const elem of array) {
    if (Array.isArray(elem)) {
      sum += sumItems(elem);
    } else {
      sum += elem;
    }
  }s
  return sum;
}

// console.log(sumItems([1, 2, 3, 4, 5]));
// console.log(sumItems([1, [2, 3]]))
// console.log(sumItems([[ 1, 2, [[3], 4]], 5, []]))

module.exports = sumItems;