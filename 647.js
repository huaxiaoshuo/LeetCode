/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let result = 0,
    returnResult = (length) => {
        for (let a = 0; a < s.length - length + 1; a++) {
            let str = s.substr(a, length) 
            console.error(str)
            if (str === str.split('').reverse().join('')) {
                result += 1
            }
        }
        (length <= s.length) && returnResult(length + 1)
    }
    s.length >= 2 && returnResult(2)
    return result + s.length
};
console.error(countSubstrings("hello"))