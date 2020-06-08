/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
   let copyS = '', copyT = ''
    for (let a = 0; a < S.length; a++) {
       if (S[a] === '#') {
        if (copyS) copyS = copyS.substr(0, copyS.length - 1)
       } else {
           copyS += S[a]
       }
    }
    for (let a = 0; a < T.length; a++) {
        if (T[a] === '#') {
            if (copyT) copyT = copyT.substr(0, copyT.length -1)
           } else {
               copyT += T[a]
           }   
    }
    return copyS === copyT
};
const S = "ab##", T = "c#d#"
console.error(backspaceCompare(S, T))