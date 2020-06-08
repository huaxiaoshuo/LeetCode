/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let leng = 0;
  function returnLeng(index) {
    let sarray = [];
    for (let a = index; a < s.length; a++) {
      if (sarray.includes(s[a])) break;
      sarray.push(s[a]);
    }
    leng = sarray.length > leng ? sarray.length : leng;
    index + 1 < s.length && returnLeng(index + 1);
  }
  returnLeng(0);
  return leng;
};
console.error(lengthOfLongestSubstring("pwwkew"));
