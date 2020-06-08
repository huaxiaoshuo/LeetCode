Function.prototype.myCall = function(connext, ...args) {
    // 双问号语法 相当于 connext || window
    // connext = (connext ?? window) || new Object(connext) 
    connext = !connext ? window : new Object(connext) 
    const key = Symbol()
    connext[key] = this
    let result = connext[key](...args)
    delete connext[key]
    return result
}
Function.prototype.myApply = function(connext, ...args) {
    // 双问号语法 相当于 connext || window
    // connext = (connext ?? window) || new Object(connext) 
    connext = !connext ? window : new Object(connext) 
    let angu = arguments[1]
    const key = Symbol()
    connext[key] = this
    let result = angu ? connext[key](...angu) : connext[key]()
    delete connext[key]
    return result
}

Function.prototype.myBind = function(connext, ...args) {
    const fn = this
    let bindFn = function (...newArgs) {
    console.error(args, newArgs)

        return fn.call(
            this instanceof bindFn ? this : connext,
            ...args, ...newArgs
        )
    }
    bindFn.prototype = Object.create(fn.prototype)
    return bindFn
}
let obj = {
    name: "123"
}
let fun = function (a,b,c ) {
    console.error(this.name,a,b,c)
}
fun.myBind(obj, 1,2,3)(123)


// fun.myApply(obj, [1,2,3])
