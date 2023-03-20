// import web3 from './web3';
const web3 = require('./web3');

// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("contracts/build/FarmData_sol_FarmData.abi"))


const instance = new web3.eth.Contract(
    ABI,
    "0x60322e993fc8141982813dB13C4497207C611c0c"
);
module.exports =  instance;