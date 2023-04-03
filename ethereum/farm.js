// import web3 from './web3';
const web3 = require('./web3');

let smartContractAddress = "0x6ED980A274e28E28dE8EF76a401e16652Ccb6d02";

// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("contracts/build/FarmData_sol_FarmData.abi"))


const instance = new web3.eth.Contract(
    ABI,
    smartContractAddress
);
module.exports =  instance;