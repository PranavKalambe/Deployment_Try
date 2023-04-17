// import web3 from './web3';
const web3 = require('./web3');

let smartContractAddress = "0xab8447866809ac8B5294FB5650705ee6d5B3780D";

// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("contracts/build/FarmData_sol_FarmData.abi"))


const instance = new web3.eth.Contract(
    ABI,
    smartContractAddress
);
module.exports =  instance;
