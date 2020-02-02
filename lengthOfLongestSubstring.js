function lengthOfLongestSubstring1(str) {
    let maxLen = 0
    let res = []
    let substring

    for (let char of str) {
        if (res.includes(char)) {
            if (res.length > maxLen) {
                maxLen = res.length
                substring = res
            }
            let index = res.indexOf(char)
            res.slice(index + 1)
        } else {
            res.push(char)
        }
    }

    return substring
}

console.log(lengthOfLongestSubstring1('abcbbc'))