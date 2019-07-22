/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0, end = 0;
    if (s == null || s.length < 1) return '';
    for (let i = 0; i < s.length; i++) {
        let len1 = expand(s, i, i)
        let len2 = expand(s, i, i + 1)
        let len = Math.max(len1, len2)
        if (len > end - start + 1) {
            if (len % 2) {
                start = i - (len - 1) / 2
                end = i + (len - 1) / 2
            } else {
                start = i - (len - 2) / 2
                end = i + 1 + (len - 2) / 2
            }
        }

    }
    return s.substr(start, end + 1)
    function expand (s, left, right) {
        let L = left, R = right;
        while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
            L--;
            R++;
        }
        return R - L - 1
    }
};
