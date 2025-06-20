class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function getPathSum(root, currentPathSum) {
    if (!root) {
        return 0
    }
    if (root.left === null && root.right === null) {
        return currentPathSum
    }
    let totalCount = 0
    if (root.left) {
        totalCount += getPathSum(root.left, currentPathSum + root.left.value)
    }
    if (root.right) {
        totalCount += getPathSum(root.right, currentPathSum + root.right.value)

    }
    return totalCount

}

function getPathSumBFS(root, currentPathSum) {
    if (!root) {
        return 0
    }
    if (root.left === null && root.right === null) {
        return currentPathSum
    }
    // 队列中存储的每个元素
    const queue = [];
    // 初始状态：将根节点及其值入队
    queue.push([root, root.value]);
    let totalCount = 0

    while (queue.length > 0) {
        const [cNode, cValue] = queue.shift()
        if (cNode.left === null && cNode.right === null) {
            totalCount += cValue
        }
        if (cNode.left) {
            queue.push([cNode.left, currentPathSum + cNode.left.value])
        }
        if (cNode.right) {
            queue.push([cNode.right, currentPathSum + cNode.right.value])
        }

    }
    return totalCount


}

// 例子，一层二叉树如下定义，路径包括1 —> 2 ,1 -> 3
const node = new TreeNode();
node.value = 1;
node.left = new TreeNode();
node.left.value = 2;
node.right = new TreeNode();
node.right.value = 3;
const totalCount = getPathSum(node, node.value); // return 7 = (1+2) + (1+3)
const totalCountBFS = getPathSumBFS(node, node.value); // return 7 = (1+2) + (1+3)
console.log('totalCount', totalCount, totalCountBFS)