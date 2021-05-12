/**
 * @name times10
 * @param {number} n
 * @returns {number} n * 10
 */
const times10 = (n) => n * 10;

/**
 * @name square
 * @param {number} n
 * @returns {number} n * n
 */
const square = (n) => n * n;

/**
 * @name memoize
 * @param {function} cb
 * @returns {function} function
 */
const memoize = (cb) => {
  let cache = {};

  return (n) => {
    if (cache[n]) {
      console.log("fetching from cache..");
      return cache[n];
    } else {
      console.log("calculating result...");
      let result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};

const memo = memoize(times10);
console.log(memo(5));
console.log(memo(5));
