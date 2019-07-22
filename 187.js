/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let result = [], resultObj = {}, length = s.length - 9;
    for (let a = 0; a < length; a++) {
        let substr = s.substring(a, a + 10)
        if (!resultObj[substr]){
            resultObj[substr] = 1
        } else {
            resultObj[substr] =  resultObj[substr] + 1
        }
    }
    for (let b in resultObj) {
        if (resultObj[b] > 1) {
            result.push(b)
        }
    }
    return result
};
