/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {},result = 0;
    for (let a = 0; a < nums.length; a++) {
        let item = nums[a]
        if (obj[item]) {
            obj[item] = obj[item] + 1
        } else {
            obj[item] = 1
        }
    }
    for (let a in obj) {
        if (obj[a] >= (parseInt(nums.length) / 2)) {
            result = parseInt(a)
        }
    }
    return result
};
