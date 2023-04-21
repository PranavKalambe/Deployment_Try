const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8041'); // replace with your own node URL

const accountAddress = '0xa5eb9b74be8ce1d5acebc86a0305aa5c7123a322'; // replace with your own account address
const accountPassword = '1234'; // replace with your own account password

web3.eth.personal.unlockAccount(accountAddress, accountPassword, 600)
    .then((result) => {
        console.log(`Account unlocked: ${result}`);
    })
    .catch((error) => {
        console.error(`Failed to unlock account: ${error}`);
    });
