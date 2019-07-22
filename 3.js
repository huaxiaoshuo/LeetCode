var lengthOfLongestSubstring = function(s) {
    let ARRS = []
    function returnArr (length) {
        if (length >= s.length) return
        let reArr = []
        for (let a = length; a < s.length; a++) {
            if (reArr.indexOf(s[a]) === -1) {
                reArr.push(s[a])
            } else {
                break
            }
        }
        ARRS.push(reArr.length)
        returnArr(length + 1)
    }
    returnArr(0)
    ARRS = ARRS.sort((a, b) => {
        return a - b
    })
    if (ARRS.length === 0) return 0
    return ARRS[ARRS.length - 1]
};
