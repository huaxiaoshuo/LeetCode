/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let result = true,
    sureArray = {},
    noArray = {};
    for (let a = 0; a < equations.length; a++) {
        let item = equations[a],
        key1 = item[0],
        code = item[1],
        key2 = item[3];
        if (code === '=') {
            if (!sureArray[key1]) {
                sureArray[key1] = [key2]
            }
            if (!sureArray[key2]) {
                sureArray[key2] = [key1]
            }
            
        }

    }
};