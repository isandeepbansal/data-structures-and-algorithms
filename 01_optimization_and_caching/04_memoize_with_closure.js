/**
 * Memoize with closure
 */

/**
 * @name times10
 * @param {number} n
 * @returns {number} n * 10
 */
const times10 = (n) => n * 10;

/**
 * @name memoizedClosureTimes10
 * @returns {function} function
 */
const memoizedClosureTimes10 = () => {
  let cache = {};

  return (n) => {
    if (cache[n]) {
      console.log("fetching from cache..");
      return cache[n];
    } else {
      console.log("calculating result...");
      let result = times10(n);
      cache[n] = result;
      return result;
    }
  };
};

const memo = memoizedClosureTimes10();
console.log(memo(10));
console.log(memo(9));
console.log(memo(10));
