var find132pattern = function (nums) {
    let result = false
    if (Array.from(new Set(nums)).length < 3) return false;
    for (let a = 1; a < nums.length - 1; a++) {
        let left = Math.min(...nums.slice(0, a)), 
        rightArr = nums.slice(a + 1, nums.length).filter(item => item > left && item < nums[a]);
        if (left < nums[a] && rightArr.length) {
            result = true
            break
        }
    }
    return result
};
const nums = [3, 1, 4, 2];
console.error(find132pattern(nums))