const Web3 = require('web3')
const httpAddr = "http://127.0.0.1:8043"

const web3 = new Web3(new Web3.providers.HttpProvider(httpAddr));

module.exports =  web3;
