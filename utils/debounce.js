const debounce = function (fn, timeOut = 300, loading = true) {
    let timeId, result
    return function (...args) {
        timeId && clearTimeout(timeId)
        if (loading) {
            if (!timeId) result = fn.apply(this, args)
            setTimeout(() => {
                this.timeId = null
            }, timeOut);
        } else {
            setTimeout(() => {
                result = fn.apply(this, args)
            }, timeOut);
        }
        return result
    }

}
