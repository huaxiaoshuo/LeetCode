/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let results = function (index, arr) {
        if (index >= ransomNote.length) return true
        if (arr.indexOf(ransomNote[index]) !== -1) {
            arr.splice(arr.indexOf(ransomNote[index]), 1, 0)
            return results(index + 1, arr)
        } else {
            return false
        }
    }
    return results(0, magazine.split(''))
};
