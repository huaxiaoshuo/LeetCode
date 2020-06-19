/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let target = [];
  nums.map((item, i) => {
    if (typeof target[index[i]] !== "number") {
      target[index[i]] = item;
    } else {
      target = [
        ...target.slice(0, index[i]),
        item,
        ...target.slice(index[i], target.length),
      ];
    }
  });
  return target;
};
const nums = [0, 1, 2, 3, 4],
  index = [0, 1, 2, 2, 1];
console.error(createTargetArray(nums, index));
