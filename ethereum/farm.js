// import web3 from './web3';
const web3 = require('./web3')
// import Interface or ABI of contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("contracts/build/FarmData_sol_FarmData.abi"))


const instance = new web3.eth.Contract(
    ABI,
    '0x14D1cdE4F79c46F257b980f14309A6d33e67743A'
);

export default instance;