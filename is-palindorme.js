var isPalindrome = function (phrase) {
    let newPhrase = phrase.replace(/\s+/g, "").toLowerCase()
    return newPhrase.toString() === newPhrase.toString().split('').reverse().join('')
};

console.log(isPalindrome('Never Even Or Odd'))