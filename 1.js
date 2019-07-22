var twoSum = function(arrs, targets) {
    for (let a = 0; a < arrs.length; a++) {
        var code = targets - arrs[a]
        if (arrs.lastIndexOf(code) >= 0 && arrs.lastIndexOf(code) !== a) {
            return new Array(a, arrs.lastIndexOf(code))
        }
    }
}
