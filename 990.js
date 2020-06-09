/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let result = true,
    sureArray = {};
    copyArr = JSON.parse(JSON.stringify(equations))
  for (let a = 0; a < equations.length; a++) {
    let item = equations[a],
      key1 = item[0],
      code = item[1],
      key2 = item[3];
    if (code === "=") {
        copyArr.push(`${key2}==${key1}`);
    }
  }
  equations = Array.from(new Set(copyArr));
  for (let a = 0; a < equations.length; a++) {
    let item = equations[a],
      key1 = item[0],
      code = item[1],
      key2 = item[3];
    if (code === "=") {
      if (!sureArray[key1]) sureArray[key1] = [key2];
      if (!sureArray[key2]) sureArray[key2] = [key1];
      let arr = Array.from(new Set([...sureArray[key1], ...sureArray[key2]]));
      sureArray[key1] = arr;
      sureArray[key2] = arr;
    }
  }
  for (let a = 0; a < equations.length; a++) {
    let item = equations[a],
      key1 = item[0],
      code = item[1],
      key2 = item[3];
    if (code === "!") {
      if (
        (sureArray[key1] && sureArray[key1].includes(key2)) ||
        (sureArray[key2] && sureArray[key2].includes(key1)) ||
        key1 === key2
      )
        result = false;
    }
  }
  console.error(sureArray)
  return result;
};
equationsPossible(["a==z","a==b","b==c","c==d","b==y","c==x","d==w","g==h","h==i","i==j","a==g","j!=y"]);
