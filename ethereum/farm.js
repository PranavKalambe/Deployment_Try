// import web3 from './web3';
const web3 = require('./web3');

let smartContractAddress = "0xAcE3FAa46AB2c8d57c037D2F7e3886B4f23262DC";

// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("contracts/build/FarmData_sol_FarmData.abi"))


const instance = new web3.eth.Contract(
    ABI,
    smartContractAddress
);
module.exports =  instance;