// Bubble sort
Array.prototype.bubbleSort = function () {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return this;
};

// Tests
test("bubble sort test 1", function () {
  const nums = [5, 3, 1, 2, 8, 6];
  const sortedNums = nums.bubbleSort();
  expect(sortedNums).toEqual([1, 2, 3, 5, 6, 8]);
});

test("bubble sort test 2", function () {
  const nums = [2, 2, 1, 8, 2, 1, 3];
  const sortedNums = nums.bubbleSort();
  expect(sortedNums).toEqual([1, 1, 2, 2, 2, 3, 8]);
});
