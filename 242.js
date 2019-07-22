/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sorts = (a, b) => {
        return a.charCodeAt(0) - b.charCodeAt(0)
    }
    s = s.split('')
    t = t.split('')
    s.sort(sorts)
    t.sort(sorts)
    return s.join('') === t.join('')
};
