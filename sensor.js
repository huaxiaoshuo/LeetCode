/* eslint-disable */
/**
 * 通过神策sdk提取出的源代码
 * 只针对自定义事件埋点
 */
let nativeForEach = Array.prototype.forEach
let breaker = {};
let each = function(obj, iterator, context) {
    if (obj == null) {
        return false;
    }
    if (nativeForEach && obj.forEach === nativeForEach) { // 判断是否为数组
        obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) { // 判断是否为数组
        for (var i = 0, l = obj.length; i < l; i++) {
            if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) {
                return false;
            }
        }
    } else {
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) { // 判断obj对象是否含有key
                iterator.call(null, obj[key], key)
            }
        }
    }
};
let strip_empty_properties = (p) => {
    var ret = {};

    each(p, function(v, k) {
        if (v != null) {
            ret[k] = v;
        }
    }, null);
    return ret;
}



// 上报给神策对应的数据
 function getEleInfo () {
    var props = {
        $element_type: '1',
        $element_name: '2',
        $element_id: '3',
        $element_class_name: undefined,
        $element_target_url: null,
        $element_content: false
    };
    props = strip_empty_properties(props);

    return props;
}

getEleInfo()
