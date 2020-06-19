/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let returnArray = function (firstIndex, lastIndex, result) {
    if (lastIndex - firstIndex === 0) return result;
    let tem = 0;
    if (height[lastIndex] < height[firstIndex]) {
      tem = height[lastIndex] * (lastIndex - firstIndex);
    } else {
      tem = height[firstIndex] * (lastIndex - firstIndex);
    }
    if (tem > result) {
      result = tem;
    }
    if (height[firstIndex] > height[lastIndex]) {
      return returnArray(firstIndex, lastIndex - 1, result);
    } else {
      return returnArray(firstIndex + 1, lastIndex, result);
    }
  };
  return returnArray(0, height.length - 1, 0);
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.error(maxArea(height));
