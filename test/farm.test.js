const assert = require('assert');

//Importing Compiled Smart Contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("ethereum/contracts/build/FarmData_sol_FarmData.abi"));
const bytecode = fs.readFileSync("ethereum/contracts/build/FarmData_sol_FarmData.bin").toString();

//Connecting to the network
const ganache = require('ganache-cli');
const Web3 = require('web3')
//Web3 Connection
// const web3 = new Web3(ganache.provider());
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

let accounts;
let farmContract;
let  deployContract;
beforeEach( async() => {
    accounts = await web3.eth.getAccounts();
    farmContract = await new web3.eth.Contract(ABI);
    farmContract = farmContract.deploy({data: bytecode});

    deployContract = await farmContract.send({
        from: accounts[0],
        gas: 1000000
    });

});


describe('farm',() => {
    it('deploys a contract', () => {
        console.log("Deployed Contract Address: ", deployContract.options.address);
    })
});