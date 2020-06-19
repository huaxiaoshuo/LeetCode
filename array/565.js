/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let result = 1,
    length = nums.length
    for (let a = 0; a < length; a++) {
        let index = 0
        let i = a
        while (nums[i]!== length && nums[i] !== i){
            index++;
            var tmpData = nums[i];
            nums[i] = length;
            i = tmpData;
        }
        result = Math.max(index,result);
    }
    return result
};
const  A = [5,4,0,3,1,6,2]
console.error(arrayNesting(A))