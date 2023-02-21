// import web3 from './web3';
const web3 = require('./web3')

// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("contracts/build/FarmData_sol_FarmData.abi"))

// take input of deplyed contract address
// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// create empty user input
let addr = "";
rl.question("Enter Deployed Contract Address\n", function (string) {
    addr = string;

    // close input stream
    rl.close();
  });


const instance = new web3.eth.Contract(
    ABI,
    "0x0f8f9ea05Ad9A0a10b7263779D837B2ef0B3AE56"
);

module.exports =  instance;