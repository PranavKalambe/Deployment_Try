const Web3 = require('web3')


const smartContractAddress = "0x3972846A6e77D97348cAa2C9e81FB7389039DeC8";
const smartContractAddressGlobal = "0x183E527dD34a8f9f1f4CA7f52F4CE63024e705f0";

const sensorNodeAddr ="0x51a3a421d1ee0cd4c87bb4d6757533a51d92df34";
const farmManagerAddr ="0xb2c92adb7f80dc2be35c30fb19b2388dfc263a9d";
const farmManagerAddrGlobal ="0x6588d7462c8a44e6a025b484ceba79283ac14229";

const httpAddr_manager = "http://127.0.0.1:8051";
const httpAddr_sensor = "http://127.0.0.1:8052"; 
const httpAddr_globalManager = "http://172.17.22.52:9042";      

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