/**
 * Memoization using cache object
 */
const cache = {};

/**
 * @name times10
 * @param {number} n
 * @returns {number} n * 10
 */
const times10 = (n) => n * 10;

/**
 * @name memoTimes10
 * @param {number} n
 * @returns {number} will call times10 if the result is not in cache object
 */
const memoTimes10 = (n) => {
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

console.log(memoTimes10(10));
console.log(memoTimes10(3));
console.log(memoTimes10(10));
