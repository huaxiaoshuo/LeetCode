/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function (
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance
) {
  let result = [];
  restaurants = restaurants.filter((item) => {
    if (veganFriendly === 1)
      return item[2] === 1 && item[3] <= maxPrice && item[4] <= maxDistance;
    return item[3] <= maxPrice && item[4] <= maxDistance;
  });
  restaurants = restaurants.sort((a, b) => {
    return a[0] - b[0];
  });
//   for (let a = 0; a < restaurants.length; a++) {
//       restaurants[a].push((maxPrice - restaurants[a][3]) + (maxDistance - restaurants[a][4]))
//   }
  restaurants = restaurants.sort((a, b) => {
    return a[3] - b[3];
  });
  restaurants = restaurants.sort((a, b) => {
    return a[4] - b[4];
  });
  restaurants = restaurants.sort((a, b) => {
    return b[1] - a[1];
  });
  for (let a = 0; a < restaurants.length; a++) {
    result.push(restaurants[a][0]);
  }
  return result;
};
const restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]],
  veganFriendly = 0,
  maxPrice = 50,
  maxDistance = 10;

console.error(
  filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance)
);
// 89877
// 58259
// 88577 - 
// ,[47368,99814,1,88577,16986],  [3664,99814,1,77091,21028],