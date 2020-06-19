/**
 * @param {number[]} T
 * @return {number[]}
 * 对象保存key 下标
 */
var dailyTemperatures = function (T) {
  let pastObj = {};
  for (let a = 0; a < T.length; a++) {
      if (!pastObj[T[a]]) {
        pastObj[T[a]] = [a]
      }else {
          pastObj[T[a]].push(a)
      }
      let pastArr = Object.keys(pastObj).filter((item) => item < T[a])
      if (pastArr.length) {
        for (let b = 0; b < pastArr.length; b++) {
            let itemObj = pastObj[pastArr[b]]
            for (let c = 0; c < itemObj.length; c++) {
                T[itemObj[c]] = a - itemObj[c]
            } 
            delete pastObj[pastArr[b]]
        }
      }
  }
  [].concat(...Object.values(pastObj)).map(item => T[item] = 0)
  return T
};
console.error(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
