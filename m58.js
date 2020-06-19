/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    return s.substr(n, s.length - n) + s.substr(0, n)
};
const s = "ab", k = 1
console.error(reverseLeftWords(s, k))