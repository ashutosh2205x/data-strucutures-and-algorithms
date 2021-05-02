import { TriesNode as TrieNode } from "./TriesNode";
// const TriesNode = require('./TriesNode')
class Trie {
  constructor() {
    this.root = new TrieNode("");
  }

  getIndex(x = "") {
    return x.charCodeAt(0) - "a".charCodeAt(0);
  }

  insert(key = "") {
    if (key == null) {
      return;
    } else {
      // 1. convert to lower case
      key = key.toLowerCase();
      // 2.get current node
      let currentNode = this.root;
      let index = 0;
      for (let level = 0; level < key.length; level++) {
        //2.a Store the character index
        index = this.getIndex(key[level]);
        //2.b Iterate the trie with the given character index,
        //2.c If the index points to null, simply create a TrieNode and go down a level
        if (currentNode.children[index] == null) {
          currentNode.children[index] = new TrieNode(key[level]);
          console.log("inserted", String(key[level]));
        }
        //2.c or transfer the current node status to next key
        currentNode = currentNode.children[index];
      }
      // 3 mark the end char as end leaf
      currentNode.MarkAsLeaf();
      console.log("'" + key + "' inserted");
    }
  }

  // To search through a trie, you need to take note of three possible cases:

  // 1. If the word does not exist, you find null before the last character can be exhausted.
  // 2. If the word is a substring of another word, it would not be found because its isEndWord value of the last character on the trie is set to false.
  // 3. If the word exists as a path from the root node to the last node and/or node marked as an end, then it is a successful search case.
  search(key = "") {
    if (key == null) {
      return false;
    }
    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    for (let level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);
      if (currentNode.children[index] == null) {
        return false;
      }
      currentNode = currentNode.children[index];
    }
    if (currentNode != null && currentNode.isEndWord) {
      return true;
    }
    return false;
  }

  //   Nodes without child branches are easily deleted. The leaf node exists first till the entire word is deleted. For prefixes, the isEndWord value is set to false.

  // Words with common prefixes would have their last node deleted along with all parent nodes in the branch that do not have any other children and are not end characters

  //   To delete a node in a trie, we first write a helper function to check if the currentNode has any children.

  //   helper function to check if current node has any children
  hasNoChildren(currentNode) {
    for (let i = 0; i < currentNode.children.length; i++) {
      if (currentNode.children[i] == null) {
        return false;
      }
      return true;
    }
  }

  //   delete(key = "") {
  //     return;
  //   }

  //Recursive function
  deleteHelper(key, currentNode, length, level) {
    let deletedSelf = false;

    if (currentNode == null) {
      console.log("Key does not exist");
      return deletedSelf;
    }

    //Base Case: If we have reached the node which points to the alphabet at the end of the key.
    if (level == length) {
      //If there are no nodes ahead of this node in this path
      //Then we can delete this node
      if (this.hasNoChildren(currentNode)) {
        currentNode = null;
        deletedSelf = true;
      }

      //If there are nodes ahead of currentNode in this path
      //Then we cannot delete currentNode. We simply unmark this as leaf
      else {
        currentNode.unMarkAsLeaf();
        deletedSelf = false;
      }
    } else {
      let childNode = currentNode.children[this.getIndex(key[level])];
      let childDeleted = this.deleteHelper(key, childNode, length, level + 1);
      if (childDeleted) {
        //Making children pointer also None: since child is deleted
        currentNode.children[this.getIndex(key[level])] = null;
        //If currentNode is leaf node that means currentNode is part of another key
        //and hence we can not delete this node and it's parent path nodes
        if (currentNode.isEndWord) deletedSelf = false;
        //If childNode is deleted but if currentNode has more children then currentNode must be part of another key
        //So, we cannot delete currentNode
        else if (this.hasNoChildren(currentNode) == false) deletedSelf = false;
        //Else we can delete currentNode
        else {
          currentNode = null;
          deletedSelf = true;
        }
      } else deletedSelf = false;
    }
    return deletedSelf;
  }
  //Function to delete given key from Trie
  delete(key) {
    if (this.root == null || key == null) {
      console.log("None key or empty trie error");
      return;
    }

    this.deleteHelper(key, this.root, key.length, 0);
  }
}
// Input keys (use only 'a' through 'z' and lower case)
let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their", "abc"];
let t = new Trie();
console.log("Keys to insert: ");
console.log(keys);
//Construct Trie
for (let i = 0; i < keys.length; i++) {
  t.insert(keys[i]);
}
