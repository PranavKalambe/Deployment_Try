const farm = require('./farm');

const web3 = require('./web3')

async function getSensorDataInfoById(){
    const fetchData = await farm.methods.getSensorDataInfo("0xa5EB9b74be8CE1D5acEBC86a0305AA5C7123a322",0).call();

    console.log(fetchData);
}

getSensorDataInfoById();