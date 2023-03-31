// import web3 from './web3';
const web3 = require('./web3_sensor');

let smartContractAddress = "0xa2C17e0Ea41E81D083CAFAC92AB811FFaF74d64C";

// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("FarmData_sol_FarmData.abi"))


const instance = new web3.eth.Contract(
    ABI,
    smartContractAddress
);
module.exports =  instance;