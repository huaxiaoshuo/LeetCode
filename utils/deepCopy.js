function find (list, f) {
    return list.filter(f)[0]
}
// 递归实现深拷贝
function deepCopy (obj, cache = []) { 
    if (obj === null || typeof obj !== "object") {
        return obj
    }
    let hit = find(cache, function(e) {
        e.original === obj
    })
    if (hit) {
        return hit.copy
    }
    const copy = Array.isArray(obj) ? [] : {}
    cache.push({
        original: obj,
        copy
    })
    Object.keys(obj).forEach(function (key) {
        copy[key] = deepCopy(obj[key])
    }, cache) 
    return copy
}
let CopyObj = deepCopy({
    a: 123,
    b: null,
    c: undefined,
    d: Symbol(),
    e: "1234",
    f: {
        a: 123,
        b: null,
        c: undefined,
        d: Symbol(),
        e: "1234",
    }
})
console.error(CopyObj)