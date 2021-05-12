// Write a recursive function that takes a number ‘n’ and returns the nth number of the Fibonacci number. 0, 1, 1, 2, 3, 5, 8, 11…

const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(10));
