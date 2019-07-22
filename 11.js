/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let resultArray = []
    let returnArray = function (firstIndex, lastIndex) {
        if (lastIndex - firstIndex === 0) return;
        resultArray.push((lastIndex - firstIndex) * (height[firstIndex] > height[lastIndex] ? height[lastIndex] : height[firstIndex]))
        if (height[firstIndex] > height[lastIndex]) {
            returnArray(firstIndex, lastIndex - 1)
        } else {
            returnArray(firstIndex + 1, lastIndex)
        }
    }
    returnArray(0, height.length - 1)
    console.log()
    return Math.max.apply(null, resultArray)
};
