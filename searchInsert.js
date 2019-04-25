var searchInsert = function (numbers, target) {
    if (numbers.indexOf(target) > 0) {
        return numbers.indexOf(target)
    } else {
        numbers.push(target)
        numbers.sort(function (a, b) { return b - a })
        console.log(numbers)
        return numbers.indexOf(target)
    }
};

console.log(searchInsert([3, 5, 7, 9, 10], 8))