/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 * 双指针
 */
var numRescueBoats = function (people, limit) {
  people = people.sort((a, b) => {
    return b - a;
  });
  let returnResult = (left, right, sum, result, num) => {
    if (left > right) {
      if (sum) return result + 1;
      return result;
    }
    if (people[left] + sum === limit)
      return returnResult(left + 1, right, 0, result + 1, 0);
    else if (people[right] + sum === limit)
      return returnResult(left, right - 1, 0, result + 1, 0);
    else if (people[left] + sum < limit){
      if (num >= 1) return returnResult(left + 1, right, 0 , result + 1, 0);
      return returnResult(left + 1, right, sum + people[left], result, num + 1);
    }
    else if (people[right] + sum < limit){
        if (num >= 1) return returnResult(left, right - 1, 0 , result + 1, 0);
        return returnResult(left, right - 1, sum + people[right], result, num + 1);
    }
    else return returnResult(left, right, 0, result + 1, 0);
  };
  return returnResult(0, people.length - 1, 0, 0, 0);
};
const people = [3,2,3,2,2], limit = 6
console.error(numRescueBoats(people, limit));
