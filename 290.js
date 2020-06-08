/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let arr = str.split(' '),
  patNum = '',
  strNum = '',
  patObj = {},
  strObj = {}
  if (pattern.length !== arr.length) return false
  for (let a = 0; a < pattern.length; a++) {
    if (!patObj[pattern[a]]) {
        patObj[pattern[a]] = a + 1
    }
    if (!strObj[arr[a]]) {
        strObj[arr[a]] = a + 1
    }
    patNum += patObj[pattern[a]]
    strNum += strObj[arr[a]]
  }
  return patNum === strNum
};
const pattern = "jquery", str = "jquery"
console.error(wordPattern(pattern, str))