
const chainMaker = {
  chain: [],
  getLength() {
   return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.getLength()) {
      this.chain = [];
      throw new Error('ERROR');
    }
    this.chain.splice(position - 1, 1);
    return this
  },
  reverseChain() {
   this.chain.reverse();
   return this
  },
  finishChain() {
    let chainStr = this.chain.join('~~');
    this.chain = [];
    return chainStr;
  }
};

module.exports = chainMaker;
