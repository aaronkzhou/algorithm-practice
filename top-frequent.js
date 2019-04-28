var topKFrequent = function(nums, k) {
  nums.sort();
  let dimension = {};
  i = 0;

  while (nums.length > 0) {
    let val = nums.pop();

    if (dimension[val]) {
      dimension[val]++;
    } else {
      dimension[val] = 1;
    }
  }

  let valueArr = Object.values(dimension).sort((a, b) => a - b);
  let newArr = [];
  while (k) {
    let val = valueArr.pop();
    for (let key of Object.keys(dimension)) {
      if (dimension[key] === val) {
        dimension[key] = null;
        newArr.push(parseInt(key));
      }
    }
    k--;
  }

  return newArr;
};

console.log(
  topKFrequent(
    [
      5,
      1,
      -1,
      -8,
      -7,
      8,
      -5,
      0,
      1,
      10,
      8,
      0,
      -4,
      3,
      -1,
      -1,
      4,
      -5,
      4,
      -3,
      0,
      2,
      2,
      2,
      4,
      -2,
      -4,
      8,
      -7,
      -7,
      2,
      -8,
      0,
      -8,
      10,
      8,
      -8,
      -2,
      -9,
      4,
      -7,
      6,
      6,
      -1,
      4,
      2,
      8,
      -3,
      5,
      -9,
      -3,
      6,
      -8,
      -5,
      5,
      10,
      2,
      -5,
      -1,
      -5,
      1,
      -3,
      7,
      0,
      8,
      -2,
      -3,
      -1,
      -5,
      4,
      7,
      -9,
      0,
      2,
      10,
      4,
      4,
      -4,
      -1,
      -1,
      6,
      -8,
      -9,
      -1,
      9,
      -9,
      3,
      5,
      1,
      6,
      -1,
      -2,
      4,
      2,
      4,
      -6,
      4,
      4,
      5,
      -5
    ],
    7
  )
);
