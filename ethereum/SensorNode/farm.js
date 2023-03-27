// import web3 from './web3';
const web3 = require('./web3_sensor');

// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("FarmData_sol_FarmData.abi"))


const instance = new web3.eth.Contract(
    ABI,
    "0xb3945bB4065E9C415dF753e182e3f5cbBFe0080d"
);
module.exports =  instance;