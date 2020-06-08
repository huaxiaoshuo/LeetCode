/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxNum = Math.max(...candies)
   candies = candies.map((item) => {
        return item + extraCandies >= maxNum ? true : false
    })
    return candies
};
let candies = [2,3,5,1,3], extraCandies = 3
console.error(kidsWithCandies(candies, extraCandies))
