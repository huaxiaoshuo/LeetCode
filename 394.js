/**
 * @param {string} s
 * @return {string}
 *
 * 从后往前找  先找 【  
 */
var decodeString = function(s) {
   const getNumber = (index, str) => {
        let num = '',
        i = index
        for (let a = index; a >= 0; a--) {
            let code =str.charCodeAt(a)
            if (code >= 48 && code <= 57) {
                num = str[a] + num
                i = a
            } else {
                break
            }
        }
      return {
        num,
        i
      }  
   }
    function returnResult (arr) {
        let first = arr.lastIndexOf('['),
        last = arr.indexOf(']', first),
        code = first - 1;
        const { num, i } = getNumber(first - 1, arr.join(''))
        arr.splice(i, last - i + 1, new Array(+num).fill(arr.slice(first + 1, last).join('')).join(''))
        if (arr.indexOf(']') > -1 && arr.indexOf(']') > -1) return returnResult(arr)
        return arr.join('')
    }
    if (s.indexOf(']') < 0 && s.indexOf(']') < 0) return s
    return returnResult(s.split(''))
};

const s ="3[a]2[bc]"
console.error(decodeString(s))