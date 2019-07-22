/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let allo = (candies, index, num, result) => {
        if (candies <= 0) return result;
        if (candies >= num) {
            result[index] += num
        } else {
            result[index] += candies
        }
        return allo(candies - num, index + 1 === result.length ? 0 : index + 1, num + 1, result)
    }
    return allo(candies, 0, 1, new Array(num_people).fill(0))
};
