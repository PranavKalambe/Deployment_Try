const Web3 = require('web3')


const smartContractAddress = "0x15a7fb3214f3E5e49e4Cd3b600120FBC73050C2E";
const smartContractAddressGlobal = "0x17808Baf94cB48ac2F1BE866360C098b9d7B5a63";

const sensorNodeAddr ="0x0599acace78742e703dead19ab3dec9e6707c209";
const farmManagerAddr ="0xa5eb9b74be8ce1d5acebc86a0305aa5c7123a322";
const farmManagerAddrGlobal ="0x7451a3d0310dc99f3eff4b85e6dc78a20550edd4";

const httpAddr_manager = "http://127.0.0.1:8041";
const httpAddr_sensor = "http://127.0.0.1:8042"; 
const httpAddr_globalManager = "http://127.0.0.1:9041";      

//sensor node address
const web3_sensor = new Web3(new Web3.providers.HttpProvider(httpAddr_sensor));
const web3_manager = new Web3(new Web3.providers.HttpProvider(httpAddr_manager));
const web3_manager_global = new Web3(new Web3.providers.HttpProvider(httpAddr_globalManager));

module.exports = { 
    smartContractAddress,
    smartContractAddressGlobal, 
    sensorNodeAddr, 
    farmManagerAddr,
    farmManagerAddrGlobal, 
    httpAddr_sensor,
    httpAddr_manager,
    httpAddr_globalManager,
    web3_sensor,
    web3_manager,
    web3_manager_global
};