// Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.

const productOfArray = (arr) => {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return "Not a valid input";
  }

  if (arr.length === 1) {
    return arr[0];
  } else {
    return (
      arr[arr.length - 1] *
      productOfArray(arr.filter((i, index) => index !== arr.length - 1))
    );
  }
};

console.log(productOfArray([1, 2, 3, 5]));
