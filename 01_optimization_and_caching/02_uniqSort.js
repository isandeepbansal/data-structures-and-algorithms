/**
 * Write an algorithm that takes an array and remove the duplicate and return the
 * sorted array.
 *
 * input: [3, 5, 6, 3, 2] => output: [2, 3, 5, 6]
 */

/**
 * @name uniqSort
 * @param {number[]} arr
 * @returns {number[]} unique and sorted array
 */
const uniqSort = (arr) => {
  const uniqueArray = unique(arr);
  return uniqueArray.sort((a, b) => a - b);
};

/**
 * @name unique
 * @param {number[]} arr
 * @returns {number[]} an unique array
 */
const unique = (arr) => {
  let cache = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!cache[arr[i]]) {
      cache[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
};

const result = uniqSort([2, 4, 5, 2, 5, 1, 10, 1, 4]);
console.log(result);
