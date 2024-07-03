const path = require('path');
const fs = require('fs');
const solvc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','EVM.sol');
const Source = fs.readFileSync(inboxPath,'uft8');
console.log(solvc.compile(Source,1));
