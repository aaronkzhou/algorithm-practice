var findMedianSortedArrays = function (nums1, nums2) {
    let newNum = nums1.concat(nums2)
    let median
    newNum.sort()
    let length = newNum.length
    if (length % 2 === 0) {
        median = (newNum[length / 2 - 1] + newNum[length / 2]) / 2
    } else {
        median = newNum[(length - 1) / 2]
    }
    return median
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))