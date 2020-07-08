// 双指针
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//     console.time('耗时')
//     nums = nums.sort()
//     let result = []; // 保存结果
//     let temObj = {} // 记录添加项 避免重复添加
//     for (let a = 0; a < nums.length - 1; a++) {
//         for (let b = nums.length - 1; b > a; b--) {
//             let temArr = nums.slice(a + 1, b),
//                 index = temArr.indexOf(0 - nums[a] - nums[b]);
//             if (index !== -1) {
//                 let itemResult = [nums[a], nums[b], nums[nums.indexOf(temArr[index], a)]].sort()
//                 if (!temObj.hasOwnProperty(itemResult)) {
//                     result.push(itemResult);
//                     temObj[itemResult] = itemResult
//                 }
//             }
//         }
//     }
//     console.timeEnd('耗时')
//     return result;
// };

var threeSum = function (nums) {
  console.time("耗时");
  nums = nums.sort((a, b) => a - b);
  let result = []; // 保存结果
  if (nums.length < 3) return result;
  for (let a = 0; a < nums.length; a++) {
    if (nums[a] > 0) break;
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    let left = a + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[a] + nums[left] + nums[right];
      if (sum === 0) {
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        result.push([nums[a], nums[left], nums[right]]); 
        left++;
        right--;
      } else if (sum < 0) left++;
      else if (sum > 0) right--;
    }
  }
  console.timeEnd("耗时");
  return result;
};

// const threeSum = function(nums) {
//     console.time('耗时')
//     let N = nums.length;
//     if (N <= 2) {
//         return [];
//     }
//     nums = nums.sort((a,b) => a-b);
//     let ret = [];
//     let i = 0;
//     while (i < N) {
//         if (nums[i] > 0) {break;}
//         let k=i+1, m=N-1;
//         let target = -nums[i];
//         while (m > k) {
//             let sum = nums[k] + nums[m];
//             if (sum === target) {
//                 ret.push([nums[i], nums[k], nums[m]]);
//                 do {m--} while ( m > k && nums[m+1] === nums[m] );
//                 do {k++} while ( m > k && nums[k-1] === nums[k] );
//             } else if (sum > target) {
//                 do {m--} while ( m > k && nums[m+1] === nums[m] );
//             } else if (sum < target) {
//                 do {k++} while ( m > k && nums[k-1] === nums[k] );
//             }
//         }
//         do {i++} while ( i < N && nums[i-1] === nums[i] );
//     }
//     console.timeEnd('耗时')
//     return ret;
// };
const nums = [-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0];
console.error(threeSum(nums));
