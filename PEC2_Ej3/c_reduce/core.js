function sum(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

function productAll(array) {
  return array.reduce((acc, curr) => acc * curr.reduce((a, b) => a * b, 1), 1);
}

function objectify(array) {
  return array.reduce((obj, curr) => {
    obj[curr[0]] = curr[1];
    return obj;
  }, {});
}

/**
 * Returns a string with the lucky numbers from the given array.
 * @param {Array} array - The array of numbers.
 * @returns {string} - The string with the lucky numbers.
 */
function luckyNumbers(array) {
  return `Your lucky numbers are: ${array.slice(0, -1).join(', ')}, and ${array.slice(-1)}`;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};