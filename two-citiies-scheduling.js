const twoCitySchedCost = function (costs) {
    let res = 0;
    const costsLength = costs.length / 2;
    costs.sort((a, b) => {
        return ((a[0] - a[1]) - (b[0] - b[1]))
    });
    for (let i = 0; i < costsLength; ++i) {
        res = res + (costs[i][0] + costs[i + costsLength][1]);
    }
    return res;
};

// console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]]))
console.log(twoCitySchedCost([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]))