/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

var subarraysDivByK1 = (A, K) => {
    let map = { 0: 1 }   // 为了让边界情况也能适用通式
    let preSum = 0       // 保存前缀和模K的结果，初始值0
    let count = 0        // 计数
    for (let i = 0; i < A.length; i++) { // 一次遍历做完所有事
      preSum = (preSum + A[i]) % K // 上一次的前缀和累加当前项，再mod
      console.error(preSum)
      if (preSum < 0) preSum += K  // 处理preSum为负数的情况，需要加 K
      if (map[preSum]) {      // 之前存过的 与当前preSum相等的key
        count += map[preSum]  // 把它出现的次数累加给count
      }
      if (map[preSum]) {      // 以前存过，出现次数+1
        map[preSum]++
      } else {                // 新存入，初始值1
        map[preSum] = 1
      }
    }
    console.error(map)
    return count              // 返回计数结果
  }
var subarraysDivByK = function(A, K) {
    let result = 0
    function isInteger (num) {
        return (num % 1 === 0)
    }
    function returnResult (firstIndex = 0) {
        console.error(firstIndex)
        let sum = 0
        for (let a = firstIndex; a < A.length; a++) {
            let item = A[a]
            sum += item
            if (sum === 0 || isInteger(sum / K)) {
                result += 1
            }
        }
        
        if (firstIndex < A.length - 1) return returnResult(firstIndex + 1)
        return result
    }
    return returnResult()
};
const A = [4,5,0,-2,-3,1], K = 5
console.error(subarraysDivByK1(A, K))