
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let strs = A + ' ' + B;
    strs = strs.split(' ')
    let result = strs.filter((item) => {
        return strs.indexOf(item) === strs.lastIndexOf(item)
    })
    return result
};
