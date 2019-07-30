/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let count = {},values = Math.floor(nums.length / 3), result = [], length = nums.length;
    for (let a = 0; a < length; a++) {
        if (result.includes(nums[a])) {
            continue;
        }
        if (!count[nums[a]]) {
            count[nums[a]] = 1
        } else {
            count[nums[a]] += 1
        }
        if (count[nums[a]] > values) {
            result.push(nums[a])
        }
    }
    return result
};
majorityElement([1, 1, 1, 3, 3, 2, 2, 2])
