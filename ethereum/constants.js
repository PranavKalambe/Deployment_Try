const Web3 = require('web3')


const smartContractAddress = "0x3ffAB0b323B19858312f009cD079565980e926A0";

const sensorNodeAddr ="0x0599acace78742e703dead19ab3dec9e6707c209";
const farmManagerAddr ="0xa5eb9b74be8ce1d5acebc86a0305aa5c7123a322";

const httpAddr_manager = "http://127.0.0.1:8041";
const httpAddr_sensor = "http://127.0.0.1:8042"; 


//sensor node address
const web3_sensor = new Web3(new Web3.providers.HttpProvider(httpAddr_sensor));
const web3_manager = new Web3(new Web3.providers.HttpProvider(httpAddr_manager));

module.exports = { smartContractAddress, 
    sensorNodeAddr, 
    farmManagerAddr, 
    httpAddr_sensor,
    httpAddr_manager, 
    web3_sensor,
    web3_manager,

};