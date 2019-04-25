var threeSum = function(nums) {
  nums.sort();
  const arr = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; i < nums.length; i++) {
      const temp = -(nums[i] + nums[j]);
      if (nums.indexOf(temp) > -1) {
        arr.push([nums[i], nums[j], temp]);
      }
    }
  }
  return arr;
};
