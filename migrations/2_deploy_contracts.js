// Add the Smart Contract to the blockchain. Run in order: 1_, 2_, etc.
const TodoList = artifacts.require("TodoList");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};