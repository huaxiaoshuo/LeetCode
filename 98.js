var isValidBST = function(root) {
    let isResult = true
    const isLegal = (node, min, max) => {
        if (node.val <= min || node.val >= max) {
            isResult = false
        }
        node.left && isLegal(node.left, min, node.val)
        node.right && isLegal(node.right, node.val, max)
    }
    root && isLegal(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    return isResult
};