const farm = require('./farm');

const web3 = require('./web3')

async function getSensorDataInfoById(){
    const fetchData = await farm.methods.getSensorDataInfo("0xE4fedB1C56Fd52E458C21A02D8e6a4C0366d6eD4","0").call();

    console.log(fetchData);
}

getSensorDataInfoById();