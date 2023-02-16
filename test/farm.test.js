const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3')
const web3 = new Web3(ganache.provider());

const {interface, bytecode} = require('../ethereum/compile.js');

// let accounts;

// beforeEach(async() => {
//     // Get a list of all accounts
//     accounts =  await web3.eth.getAccounts();

//     // use one of the account to deploy contract


// }
// )

describe('Running test on farm', ()=> {
    it('deploys a contract', ()=>{
        console.log(interface);
    })
})

let accounts;
let farmContract;
beforeEach( async() => {
    accounts = await web3.eth.getAccounts();
    // farmContract = await new web3.eth.Contract(JSON.parse(interface))
    // .deploy({ data: bytecode})
    // .send({from: accounts[0],gas:'1000000'})
});


describe('farm',() => {
    it('deploys a contract', () => {
        console.log(accounts);
        console.log(interface);
    })
});