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
    const previousHash = this.generateGenesisBlock().hash;
    const timestamp = new Date().toISOString();
    const newBlock = new Block(index, previousHash, timestamp, data);
  }
};
