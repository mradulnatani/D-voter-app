const { interfaces, Bytecode } = require('C:/Users/mradu/OneDrive/Documents/Solidity and ethereum course/D-voter-app/compile');
const mocha = require('mocha');
const ganache = require('ganache');
const assert = require('assert');
const {Web3} = require('web3');
const web3 = new Web3(ganache.provider());
let EVM;
let accounts;
describe('test for EVM',()=>{
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
   EVM = await web3.eth.Contracts(JSON.parse(interfaces)).deploy({ data: Bytecode}).send({from:accounts[0],gas:'1000000'});
});
})