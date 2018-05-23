const Web3 = require("web3");
const solc = require("solc");
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

let source = `pragma solidity ^0.4.20;
contract HelloWorld {
  function displayMessage() pure public returns (string) { return "Hello from a smart contract"; }
}
`

var compiled = solc.compile(source);



// console.log(compiled.contracts[":HelloWorld"].bytecode);

// console.log();

// console.log(compiled.contracts[":HelloWorld"].opcodes);

// console.log();

// console.log(compiled.contracts[":HelloWorld"].interface);



//save public interface of contract
var abi = JSON.parse(compiled.contracts[":HelloWorld"].interface)

//create var with contract
var hwContract = web3.eth.contract(abi)


const deployed = hwContract.new({
  from: web3.eth.accounts[0],
  data: compiled.contracts[':HelloWorld'].bytecode,
  gas: 4700000,
  gasPrice: 10
}, (error, contract) => {
    if (error) {
      console.error(error);
    } else {
      if (contract.address) {
        console.log(contract.displayMessage());
      }
    }
});
