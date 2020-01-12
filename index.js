const Blockchain = require("./lib/blockchain");

const chain = new Blockchain();

chain.addBlock({ amount: 100 });
chain.addBlock({ amount: 50 });
chain.addBlock({ amount: 200 });

console.log(chain);
console.log("Is chain valid: ", chain.isChainValid());
