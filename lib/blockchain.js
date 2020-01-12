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
};
