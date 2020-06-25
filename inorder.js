class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  addNode(val) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(val);
      return;
    } else {
      const searchNode = function (node) {
        if (val < node.val) {
          if (node.left === null) {
            node.left = new Node(val);
            return;
          } else if (node.left !== null) {
            return searchNode(node.left);
          }
        } else if (val > node.val) {
          if (node.right === null) {
            node.right = new Node(val);
            return;
          } else if (node.right !== null) {
            return searchNode(node.right);
          }
        } else {
          return null;
        }
      };
      return searchNode(node);
    }
  }

  findMinHeight(node = this.root) {
    if (node == null) {
        return -1;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
        return left + 1;
    } else {
        return right + 1;
    };
}
findMaxHeight(node = this.root) {
    if (node == null) {
        return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
        return left + 1;
    } else {
        return right + 1;
    };
}

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.val);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
}

const tree = new BinaryTree();

// WITH INTEGERS

tree.addNode(9);
tree.addNode(4);
tree.addNode(17);
tree.addNode(3);
tree.addNode(6);
tree.addNode(22);
tree.addNode(5);
tree.addNode(7);
tree.addNode(20);
tree.addNode(10);
console.log(tree.findMinHeight());
console.log(tree.findMaxHeight());
// WITH STRINGS

// tree.addNode('mike');
// tree.addNode('delta');
// tree.addNode('charlie');
// tree.addNode('hotel');
// tree.addNode('yankee');
// tree.addNode('india');
// tree.addNode('zulu');
// tree.addNode('echo');
// tree.addNode('alpha');
// tree.addNode('oscar');


console.log("IN-ORDER-TREE-TRAVERSAL: " + tree.inOrder());


// TIME COMPLEXITY : time complexity is O(height).

//  WORST CASE : we had to traverse all the way to bottom left/ right of the tree to insert a node, which is propotionally related to the height of the tree. O(height)

//  BEST CASE : We could insert the node at the very first node, i.e. root , so O(1), height = 1