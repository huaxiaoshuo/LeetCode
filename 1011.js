/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let minWeight = Math.max(Math.floor(weights.reduce((a, b) => a + b) / D), Math.max(...weights))
    console.error(minWeight)
    let returnResult = (code) => {
        let index = 0, day = 0, weight = 0
        while (index < weights.length) {

        }
    }
    return returnResult(minWeight)
};
const weights = [1,2,3,4,5,6,7,8,9,10], D = 5
console.error(shipWithinDays(weights, D))