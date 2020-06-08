var singleNumbers = function(nums) {
    let numsMap = Array.from(new Set(nums))
    let result = numsMap.filter((item) => {
        return nums.indexOf(item) == nums.lastIndexOf(item)
    })
    return result
};
singleNumbers([1,2,10,4,1,4,3,3])