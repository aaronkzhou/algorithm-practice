var balancedStringSplit = function (s) {
    let count = 0
    let array = []
    for (let char of s) {
        array.push(char)
        let lQuantity = array.filter(x => x === 'L').length
        let RQuantity = array.filter(x => x === 'R').length
        if (lQuantity === RQuantity) {
            array = []
            count++
        }
    }
    return count
};
console.log(balancedStringSplit('RLRRLLRLRL'))