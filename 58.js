/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strArr = s.split(' ');
    let lastStr = '';
    returnLastStr(strArr.length - 1)
    function returnLastStr(index) {
        if (index < 0) {
            return
        }
        if (strArr[index].trim()) {
            lastStr = strArr[index].trim()
        } else {
            returnLastStr(index - 1)
        }
    }
    return lastStr ? lastStr.length : 0;
};
