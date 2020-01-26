var threeSum = function (nums) {
    let res = []
    let i = 0
    let length = nums.length
    nums.sort((a, b) => a - b)
    if (Math.max(nums) < 0) return []
    while (i < length) {
        let j = i
        while (j < length) {
            j++
            if (nums[i] + nums[j] > 0) continue;
            if (nums.slice(j + 1).includes(-(nums[i] + nums[j]))) {
                let arr = [nums[i], nums[j], -(nums[i] + nums[j])]
                if (res.filter(item => JSON.stringify(arr) === JSON.stringify(item)).length === 0)
                    res.push(arr)
            }
        }
        i++
    }
    return res
};

console.log(threeSum([-9, -14, -3, 2, 0, -11, -5, 11, 5, -5, 4, -4, 5, -15, 14, -8, -11, 10, -6, 1, -14, -12, -13, -11, 9, -7, -2, -13, 2, 2, -15, 1, 3, -3, -12, -12, 1, -2, 6, 14, 0, -4, -13, -10, -12, 8, -2, -8, 3, -1, 8, 4, -6, 2, 1, 10, 2, 14, 4, 12, 1, 4, -2, 11, 9, -7, 6, -13, 7, -3, 8, 14, 8, 10, 12, 11, -4, -13, 10, 14, 1, -4, -4, 2, 5, 4, -11, -7, 3, 8, -10, 11, -11, -5, 7, 13, 3, -2, 8, -13, 2, 1, 9, -12, -11, 6]))