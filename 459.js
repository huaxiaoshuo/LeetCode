/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let code = ''
    if (s.length <= 1) return false
    for (let a = 0; a < (s.length % 2 === 0 ? s.length / 2 : Math.floor(s.length / 2) + 1); a++) {
        code += s[a]
        if (s.split(code).join('').length === 0) return true 
    }
    return  false
};
const s = "abc"
console.error(repeatedSubstringPattern(s))