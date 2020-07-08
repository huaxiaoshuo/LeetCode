/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {

    getElement = (root, result = []) => {
        if (root.val) result.push(root.val)
        (root.left && getElement(root.left, result)) ||
        (root.right && getElement(root.right, result));
        return result
    }
    root1 = getElement(root1)
    console.error(root1)
    root2 = getElement(root2)
    console.error(root2)
    let root = [...root1, ...root2]
    root = root.sort((a, b) => a - b)
    return root
};
let root1 = [2,1,4], root2 = [1,0,3]
console.error(getAllElements(root1, root2))