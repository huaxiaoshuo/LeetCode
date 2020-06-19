/**
 * @param {number} num
 * @return {number}
 */


let translateNum = (num) => {
  num += "";
  let result = [];

  for (let a = 0; a < num.length; a++) {
      result[a] = ((a === 0) ? 1 : result[a - 1])
      if (a > 0 && num[a - 1] != '0' && (parseInt(num[a - 1]) * 10 + parseInt(num[a] || 0) < 26)){
        result[a] += ((a === 1) ? 1 : result[a - 2])
      }
        
  }
  return result[result.length - 1]
};
translateNum(506);
