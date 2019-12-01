var twoSum = function (nums, target) {
    let result
    // nums = nums.sort(function (a, b) { return a - b })
    nums.forEach(function (item, index) {
        // if (item > target) return
        for (let i = index + 1; i < nums.length; i++) {
            if (item + nums[i] === target) {
                console.log(item, index, i)
                result = [index, i]
            }
        }
    })
    console.log(result)
    return result
};

twoSum([2, 7, 11, 15], 9)
twoSum([3, 2, 4], 6)
twoSum([3, 3], 6)
twoSum([-1, -2, -3, -4, -5], -8)