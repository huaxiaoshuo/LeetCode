var jump = function(nums) {
    let index = 0
    length = nums.length - 1
    result = 0,
    preMaxNum = 0, // 上个数字最多能走几步
    maxNum = 0 // 最远能到达的位置下标
    if (length !== 0) {
        while (preMaxNum <= length) {
            maxNum = Math.max(maxNum, index + nums[index]) //每次更新最远位置下标
            if (preMaxNum === index) { // 上一步所能走的步数走完了取个最大的值
                result++
                preMaxNum = maxNum
            }
            if (preMaxNum >= length) {
                break
            }
            index++
        }
    }
    return result
};

jump([2,3,1,1,4])


//  抽象    