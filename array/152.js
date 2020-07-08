/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = Number.MIN_SAFE_INTEGER
    function calcProduct (arr) {
      if (arr.length === 0) {
        return 0
      }
      return arr.reduce((a, b) => {
        return a * b
      })
    }
    function returnResult (index) {
      if (index >= nums.length) return
      for (let a = 0; a < nums.length; a++) {
        let arr = nums.slice(a, a + index + 1)
        if (calcProduct(arr) > result) result = calcProduct(arr) 
        if (arr.length < index) break
      }
      return returnResult(index + 1)
    }
    returnResult(0)
    return result

};
console.error(maxProduct([-2]))
// -2 0 -1 1 2 -2