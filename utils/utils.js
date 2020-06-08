// 正则表达式


 const compact = arr => arr.filter(Boolean) // 使用Array.filter()筛选出 falsey 值 (false、null、0、""、undefined和NaN).

 const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0) //  统计 数组中出现value的次数

const deepFlatten = arr => [].concat(...arr.map(i => {Array.isArray(i) ? deepFlatten(i) : i})) // 转换多维数组为1维数组

const difference = (a, b) => { // 对比两个数组差异
    let diffArr = new Set(b)
    return a.filter(v => !diffArr.has(v))
}
const union = (a, b) => Array.from(new Set([...a, ...b])) //  返回数组中全部元素



const distinctValuesOfArray = arr => [...new Set(arr)] //   数组去重


 export default {
     compact,
     countOccurrences
 }