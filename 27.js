/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let getRid = function (nums, val) {

        if (nums.length === 0) return;
        if (nums.indexOf(val) > -1) {
            nums.splice(nums.indexOf(val), 1)
            getRid(nums, val)
        }
    }
    getRid(nums, val)
    return nums.length
};
