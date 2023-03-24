const farm = require('./farm');

const web3 = require('./web3')

async function getSensorDataInfoById(){
    const fetchData1 = await farm.methods.getSensorDataInfo("0xeEaaa3691cbC42d72bB07e315ab7B0A6CbF98859",0).call();
    const fetchData2 = await farm.methods.getSensorDataInfo("0xeEaaa3691cbC42d72bB07e315ab7B0A6CbF98859",1).call();
    console.log(fetchData1);
    console.log(fetchData2);
}

getSensorDataInfoById();