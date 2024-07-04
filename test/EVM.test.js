const { interfaces, Bytecode } = require('./compile');
const mocha = require('mocha');
const ganache = require('ganache');
const assert = require('assert');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let EVM;

beforeEach(async () => {
  // EVM: await web3.eth.getAccounts.contracts(JSON.parse(interfaces)).deploy({ data: Bytecode, arguments: 'hi' })
});
