const farm = require('./farm');

const web3 = require('./web3')

async function getSensorDataInfoById(){
    const camp = await farm.methods.getSensorDataInfo("0x828A6e617c064d56f97fA2aAF3D389C2508D5597","0").call();
    const x = web3.eth.call({to: "0x828A6e617c064d56f97fA2aAF3D389C2508D5597", data: "2"});

    console.log(camp);
    console.log(x);
}

getSensorDataInfoById();