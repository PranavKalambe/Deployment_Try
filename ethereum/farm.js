import web3 from './web3';

// import Interface or ABI of contract
import farmABI from './build/farmABI.json';

const instance = new web3.eth.Contract(
    JSON.parse(farmABI.interface),
    'ADDRESS HERE'
);

export default instance;