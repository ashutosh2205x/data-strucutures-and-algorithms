// basic Tries Node structure

// For a key with n characters, the worst-case time complexity turns out to be O(n)O(n) since we need to make nn iterations.

class TriesNode {
  constructor(char) {
    this.char = char;
    this.children = [];
    for (let i = 0; i < 26; i++) {
      this.children[i] = null;
    }
    this.endOfWord = false;
  }
}

//Function to mark the currentNode as Leaf
function MarkAsLeaf() {
  this.endOfWord = true;
}

//Function to unmark the currentNode as Leaf
function UnMarkAsLeaf() {
  this.endOfWord = false;
}
module.export = TriesNode;
