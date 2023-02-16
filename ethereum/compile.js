const path = require('path');
const fs = require('fs');
const solc = require('solc');

const farmDataPath = path.resolve(__dirname,'contracts','FarmData.sol');
const source = fs.readFileSync(farmDataPath,'utf8');

// console.log(solc.compile(source,1)) // not working

var input = {
    language: 'Solidity',
    sources: {
             'FarmData.sol': {
              content: source
   }
},
    settings: {
              outputSelection: {
              '*': {
                 '*': ['*']
                  }
               }
      }
};


// console.log(source);
//Checking compile output
// console.log(solc.compile(JSON.stringify(input)));

// var output = JSON.parse(solc.compile(JSON.stringify(input)));
// console.log(output);

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['FarmData.sol'].basic;
// module.exports = solc.compile(JSON.stringify(source))

console.log(module.exports)