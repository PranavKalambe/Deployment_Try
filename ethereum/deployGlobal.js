const fs = require("fs");
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8042"));

const ABI = JSON.parse(fs.readFileSync("contracts/build/BidData_sol_BidData.abi"));

const bytecode = fs.readFileSync("contracts/build/BidData_sol_BidData.bin").toString();

async function deploy() {

  const accounts = await web3.eth.getAccounts();
  console.log("Deploying using Account - ",accounts[0]);

  const balance = await web3.eth.getBalance(accounts[0]);
  const etherAmount = web3.utils.fromWei(balance, 'ether');
  console.log("Current Balance - ", etherAmount);

  const farmContract = new web3.eth.Contract(ABI);

  const deployContract = await farmContract.deploy({
    data: bytecode,
  }).send({
    from: accounts[0],
    gas: 1500000,
    gasPrice: '300000000000'
   });

  console.log(`Contract deployed at address: ${deployContract.options.address}`);

}

  deploy();
