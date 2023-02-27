// import web3 from './web3';
const web3 = require('./web3')

// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("contracts/build/FarmData_sol_FarmData.abi"))


const instance = new web3.eth.Contract(
    ABI,
    "0x4d4D9aCD46df8064Cf1312bA58f5f248A5E4E2Bd"
);

module.exports =  instance;