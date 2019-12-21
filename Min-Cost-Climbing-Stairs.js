let minCostClimbingStairs = function (cost) {
    let minCost = cost
    let i = 2
    let length = cost.length
    while (i < length) {
        minCost[i] = Math.min(minCost[i - 1], [minCost[i - 2]]) + minCost[i]
        i++
    }
    return Math.min(minCost[length - 1], minCost[length - 2])
};

console.log(minCostClimbingStairs([10, 15, 20]))
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))