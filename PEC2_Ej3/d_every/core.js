// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every(num => num % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  const type = typeof input[0];
  return input.every(item => typeof item === type);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every(arr => Array.isArray(arr) && arr.every(num => num > 0));
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input.every(word => {
    const vowels = word.match(/[aeiou]/gi);
    return vowels && vowels.every((v, i, arr) => v === arr[0]);
  });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
