/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    function comPoreFun(indexA, indexB) { // 比较最后一个元素  从后向前比较
        if (indexA >= 0 && indexB >= 0) {
            nums1[indexA] = nums2[indexB]
            comPoreFun(indexA - 1, indexB - 1)
        }

    }
    comPoreFun(nums1.length - 1, nums2.length - 1)
    nums1.sort(function (a, b) {
        return a - b
    })
    return nums1
};
