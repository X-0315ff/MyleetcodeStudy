
var Trie = function() {
  this.root = new TrieNode();
};

var TrieNode = function() {
  this.children = new Map(); // 存储子节点
  this.isEnd = false; // 标记是否为完整单词
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let char of word) {
      if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
      }
      // 移动到下一个节点
      node = node.children.get(char);
  }
  // 标记为单词结尾
  node.isEnd = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let node = this._findNode(word);
  return node !== null && node.isEnd;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  return this._findNode(prefix) !== null;
};

/** 
* @param {string} prefix
* @return {TrieNode | null}
*/
Trie.prototype._findNode = function(prefix) {
  let node = this.root;
  for (let char of prefix) {
      if (!node.children.has(char)) {
          return null;  // 如果某个字符不存在，则前缀不匹配
      }
      node = node.children.get(char);
  }

  return node;// 返回最后一个匹配的节点
};


/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */