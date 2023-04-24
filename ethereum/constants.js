const Web3 = require('web3')


const smartContractAddress = "0xB5DD0E66d22915288CF6A6A560fE4EC5345BbD57";
const smartContractAddressGlobal = "0x183E527dD34a8f9f1f4CA7f52F4CE63024e705f0";

const sensorNodeAddr ="0x6df2c4db72a6bfffd05b573d9a676460574fbd45";
const farmManagerAddr ="0x1eb8dca855677c48ac6352dd3bb2aaab0ffe8fa3";
const farmManagerAddrGlobal ="0x259b9dae53619179fbe4aa399812c8ecdcb5cf23";

const httpAddr_manager = "http://127.0.0.1:8041";
const httpAddr_sensor = "http://127.0.0.1:8042"; 
const httpAddr_globalManager = "http://172.17.22.51:9041";      

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