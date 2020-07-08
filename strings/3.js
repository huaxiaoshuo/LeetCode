/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length
    let left = right = 0, count = 0,arr = []
    while (right < s.length) {
        while (arr.includes(s[right])) {
            // left++
            arr.shift()
        }
        arr.push(s[right])
        count = Math.max(arr.length, count)
        right++
    }
    return count
};
const s = "bbbbb"
console.error(lengthOfLongestSubstring(s))