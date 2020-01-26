var minTimeToVisitAllPoints = function (points) {
    let i = 1
    let length = points.length
    let step = 0
    while (i < length) {
        let horizontalGap = Math.abs(points[i][0] - points[i - 1][0])
        let verticalGap = Math.abs(points[i][1] - points[i - 1][1])
        step = step + Math.min(horizontalGap, verticalGap) + Math.abs(horizontalGap - verticalGap)
        i++
    }
    return step
};

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]))