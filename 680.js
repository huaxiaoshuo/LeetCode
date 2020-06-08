/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const isValid = (str) => {
        return str === str.split('').reverse().join('')
    }
    if (!s) return false;
    if (isValid(s)) return true
    const reutrnResult = function(index) {
        if (index >= s.length) return false
        let arr = s.split('')
        arr.splice(index, 1)
        if (isValid(arr.join(''))) return true
        return reutrnResult(index + 1)
        
    }
    return reutrnResult(0)
};
console.error(validPalindrome('abacaba'))