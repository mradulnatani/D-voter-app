const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','EVM.sol');
const Source = fs.readFileSync(inboxPath,'utf8');
const input = {
    language: 'Solidity',
    sources: {
      'EVM.sol': {
        content: Source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };
module.exports = JSON.parse(solc.compile(JSON.stringify(input)));