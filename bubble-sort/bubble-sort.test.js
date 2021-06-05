function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
}

test.skip("bubble sort test 1", function () {
  const nums = [8, 4, 6, 2, 9];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([2, 4, 6, 8, 9]);
});
