/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  s = s.split("");
  let parentLeft = [];
  for (let a = 0; a < s.length; a++) {
    if (s[a] === "(") parentLeft.push(a);
    else if (s[a] === ")") {
      if (!parentLeft.length) s[a] = "";
      else parentLeft.pop();
    }
  }
  parentLeft.map(item => s[item] = '')
  return s.join('')
};
const s = "(a(b(c)d)";
console.error(minRemoveToMakeValid(s));
