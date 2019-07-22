/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let returnSQIT = function (index) {
        if (index * index > num) return false
        if (index * index === num) return true
        return returnSQIT(index + 1)
    }
    return returnSQIT(0)
};
