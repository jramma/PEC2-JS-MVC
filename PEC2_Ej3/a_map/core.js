/**
 * Multiplica cada elemento de un array por 10.
 *
 * @param {number[]} array - Un array de números.
 * @returns {number[]} - Un nuevo array con cada elemento multiplicado por 10.
 */
function multiplyBy10(array) {
  return array.map(item => item * 10);
}
/**
 * Desplaza todos los elementos de un array una posición a la derecha.
 *
 * @param {Array} array - Un array de elementos.
 * @returns {Array} - Un nuevo array con los elementos desplazados una posición a la derecha.
 */
function shiftRight(array) {
  return [array[array.length - 1], ...array.slice(0, -1)];
}
/**
 * Reemplaza todas las consonantes en las palabras de un array por vacío.
 *
 * @param {string[]} array - Un array de palabras.
 * @returns {string[]} - Un nuevo array con las palabras solo con vocales.
 */
function onlyVowels(array) {
  return array.map(word => word.replace(/[^aeiou]/gi, ''));
}
/**
 * Duplica cada elemento de una matriz.
 *
 * @param {number[][]} array - Una matriz de números.
 * @returns {number[][]} - Una nueva matriz con cada elemento duplicado.
 */
function doubleMatrix(array) {
  return array.map(subArray => subArray.map(item => item * 2));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};