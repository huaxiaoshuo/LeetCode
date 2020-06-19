/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed = flowerbed.join("").split("1");
  console.error(flowerbed);
  if (flowerbed.length === 1) n -= Math.ceil(flowerbed[0].length / 2);
  else {
    for (let a = 0; a < flowerbed.length; a++) {
      if ((a === 0 || a === flowerbed.length - 1) && flowerbed[a].length >= 2)
        n -= Math.floor(flowerbed[a].length / 2);
      else {
        if (flowerbed[a].length >= 3)
          n -= Math.floor((flowerbed[a].length - 1) / 2);
      }
      if (n <= 0) return true;
    }
  }
  return n <= 0 ? true : false;
};
const flowerbed = [0, 0, 0],
  n = 2;
console.error(canPlaceFlowers(flowerbed, n));
