const input1 = [1, 2, 8, 4];
const input2 = [1, 2, 2, 7];

/**
 * @name isUnique
 * @param {number[]} arr
 * @returns {boolean} true or false
 */
const isUnique = (arr) => {
  let cache = {};

  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) {
      return false;
    } else {
      cache[arr[i]] = true;
    }
  }

  return true;
};

const result1 = isUnique(input1);
const result2 = isUnique(input2);
console.log(result1);
console.log(result2);
