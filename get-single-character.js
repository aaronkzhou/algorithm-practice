let str = 'aabbcddaassbb'

function getSingleCharacter(str) {
    let arr = str.split('')
    let singleCharacter
    while (arr.length > 0) {
        if (arr[0] === arr[1]) {
            arr.shift()
            arr.shift()
        } else {
            singleCharacter = arr[0]
            arr.shift()
        }
    }
    return singleCharacter
}

console.log(getSingleCharacter(str))