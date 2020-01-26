const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function getArray(arr) {
    let array = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            for (let item of getArray(element)) array.push(item)
            return
        }
        array.push(element)
    });
    return array
}

console.log(getArray(arr))