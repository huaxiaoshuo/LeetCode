/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0,right = s.length - 1
    while(left < right) {
        let item = s[left]
        s[left] = s[right]
        s[right] = item
        left++
        right--
    }
    return s
};
const s = ["h","e","l","l","o"]
console.error(reverseString(s))