// import web3 from './web3';
const web3 = require('./web3');

// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("contracts/build/FarmData_sol_FarmData.abi"))


const instance = new web3.eth.Contract(
    ABI,
    "0x334818e4d049dD5d0126F936ad2BAfd9897C36D3"
);
module.exports =  instance;