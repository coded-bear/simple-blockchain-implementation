const Block = require("./block");

module.exports = class Blockchain {
  constructor() {
    this.chain = [this.generateGenesisBlock()];
  }

  generateGenesisBlock() {
    return new Block(0, "0", new Date().toISOString(), { info: "Genesis Block" });
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data) {
    const index = this.chain.length;
    const previousHash = this.getLatestBlock().hash;
    const timestamp = new Date().toISOString();
    const newBlock = new Block(index, previousHash, timestamp, data);

    if (this.isValidBlock(newBlock, this.getLatestBlock())) {
      this.chain.push(newBlock);
    } else console.error("Invalid Block!");
  }

  isValidBlock(newBlock, previousBlock) {
    if (
      newBlock.index !== previousBlock.index + 1 ||
      newBlock.previousHash !== previousBlock.hash ||
      newBlock.hash !== newBlock.calculateHash()
    ) {
      return false;
    }
    return true;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      if (!this.isValidBlock(this.chain[i], this.chain[i - 1])) return false;
    }
    return true;
  }
};
