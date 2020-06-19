/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
    let length = light.length,
    result = 0
    minNumber = length
    maxNumber = 0
    for (let a = 0; a < length; a++) {
        maxNumber = Math.max(light[a], maxNumber)
        if (minNumber !== 1) minNumber = Math.min(light[a], minNumber)
        if (maxNumber === (a + 1) && minNumber === 1) {
            result++
        }
    }
    return result
};
const light = [1,2,3,4,5,6]
console.error(numTimesAllBlue(light))