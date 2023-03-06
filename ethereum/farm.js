// import web3 from './web3';
const web3 = require('./web3');

// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("contracts/build/FarmData_sol_FarmData.abi"))


const instance = new web3.eth.Contract(
    ABI,
    "0xe26955808a8304597241FB204f06348fEC830a55"
);
module.exports =  instance;