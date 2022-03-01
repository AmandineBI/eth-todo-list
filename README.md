# eth-todo-list

Follows video https://www.youtube.com/watch?v=coQ5dg8wM2o

Note for the author: Clone from github.com-perso


# Requirements

1. Install Ganache and have it running,
2. Have node.js and npm installed,
3. Install Truffle 5.0.2,
4. Install Web3 ($ npm install web3).


# Commands to deploy

truffle compile

truffle migrate --reset

truffle console


# Commands to read the smart contract

> todoList = await TodoList.deployed()
> 
> todoList.address
> 
> taskCount = await todoList.taskCount()
> 
> taskCount.toNumber()
