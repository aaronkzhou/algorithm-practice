function lengthOfLongestSubstring(str) {
    let maxLen = 0
    let res = []

    for (let char of str) {
        if (res.includes(char)) {
            if (res.length > maxLen) {
                maxLen = res.length
            }

            res.push(char)
            let idx = res.indexOf(char)
            res = res.slice(idx + 1)
        } else {
            res.push(char)
        }
    }

    if (res.length > maxLen) {
        maxLen = res.length
    }

    return maxLen
}

console.log(lengthOfLongestSubstring('abcbbcb'))