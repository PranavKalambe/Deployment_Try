//Importing Compiled Smart Contract
const fs = require("fs")
const ABI = JSON.parse(fs.readFileSync("contracts/build/FarmData_sol_FarmData.abi"))
const bytecode = fs.readFileSync("contracts/build/FarmData_sol_FarmData.bin").toString();

//Connecting to the network
// const ganache = require('ganache-cli');
const Web3 = require('web3')
//Web3 Connection
// const web3 = new Web3(ganache.provider());


const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8042"));



let accounts;

async function deploy(){
    accounts =  await web3.eth.getAccounts();
    let farmContract =  new web3.eth.Contract(ABI);
    farmContract = farmContract.deploy({data: bytecode});
    console.log("Hello");

    try{
        const deployContract = await farmContract.send({
            from: accounts[0],
            gas: 8000000
        });
        console.log("Deployed Contract Address: ", deployContract.options.address);
    }
    catch(err){
        console.error("Error Deploying contract".err);
    }

   
} 

deploy()



// web3.personal.unlockAccount('0xe4fedb1c56fd52e458c21a02d8e6a4c0366d6ed4', '12345', 600)