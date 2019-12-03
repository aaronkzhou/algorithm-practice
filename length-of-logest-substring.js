function lengthOfLongestSubstring(str) {
    let maxLen = 0
    let res = []
    for (let s of str) {
        if (res.includes(s)) {
            if (res.length > maxLen) {
                maxLen = res.length
            }
            res.push(s)
            let idx = res.indexOf(s)
            res = res.slice(idx + 1)
        } else {
            res.push(s)
        }
    }
    if (res.length > maxLen) {
        maxLen = res.length
    }
    return maxLen
}

console.log(lengthOfLongestSubstring("pwwkew"))