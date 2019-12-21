var isSubsequence = function (s, t) {
    let isSubsequence = false
    for (let char of s) {
        let charLocation = t.indexOf(char)
        console.log(t)
        if (charLocation < 0) return isSubsequence
        t = t.slice(charLocation + 1, t.length)
    }
    isSubsequence = true
    return isSubsequence
}

console.log(isSubsequence('abc', 'ahbgdc'))