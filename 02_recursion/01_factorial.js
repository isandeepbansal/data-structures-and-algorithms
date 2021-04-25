// Write a recursive function that takes a number as an input and returns the factorial of that number.

const factorial = (n) => {
  if (n < 0) return "number must be a positive";

  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(10));
