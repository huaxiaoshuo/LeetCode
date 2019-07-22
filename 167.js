/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let result = []
    for (let a = 0; a < numbers.length; a++) {
        if (numbers.lastIndexOf(target - numbers[a]) >= 0) {
            result.push(a + 1, numbers.lastIndexOf(target - numbers[a]) + 1)
            break
        }
    }
    return result
};
