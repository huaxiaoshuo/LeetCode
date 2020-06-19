/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function(text) {
    let textArr = [],
    resultArr = [],
    getArray = (arr) => Array.from(new Set(arr))
    textArr = text.split('')
    for (let a = 0; a <= textArr.length - getArray(textArr).length; a++) {
        let item = getArray(textArr.slice(a, textArr.length))
        if (item.length === getArray(textArr).length) {
            resultArr.push(item.join(''))
        }
    }
   resultArr = resultArr.sort()
   return resultArr[0]
};
console.error(smallestSubsequence('ecbacba'))