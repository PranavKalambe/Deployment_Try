const farm = require('./farm');

async function getSensorData(){
    console.log("Farm Manager Working fetching data")
    // // sensor 1
    // console.log("From Sensor Node1 - 0xA9F0e4Def08e5d2354B41c4f23Ba6BfeC5811ef9")
    // var length = await farm.methods.getSensorDataCount("0xA9F0e4Def08e5d2354B41c4f23Ba6BfeC5811ef9").call();
    // for (let index = 0; index < length; index++) {
    //     const fetchData1 = await farm.methods.getSensorDataInfo("0xA9F0e4Def08e5d2354B41c4f23Ba6BfeC5811ef9",index).call();
    //     console.log("From Sensor1 ",fetchData1);
    // }

    // sensor 2
    console.log("From Sensor Node2 - 0x3d38cb427212c11ee8E6e8D1Feb2AbbB3B0581a1")
    var length = await farm.methods.getSensorDataCount("0x3d38cb427212c11ee8E6e8D1Feb2AbbB3B0581a1").call();
    for (let index = 0; index < length; index++) {
        const fetchData2 = await farm.methods.getSensorDataInfo("0x3d38cb427212c11ee8E6e8D1Feb2AbbB3B0581a1",index).call();
       console.log("From Sensor2 ",fetchData2);
    }

//     const fetchData1 = await farm.methods.getSensorDataInfo("0xA9F0e4Def08e5d2354B41c4f23Ba6BfeC5811ef9",0).call();
//     const fetchData2 = await farm.methods.getSensorDataInfo("0x3d38cb427212c11ee8E6e8D1Feb2AbbB3B0581a1",0).call();
//     console.log("From Sensor1 - 8043 - 0xA9F0e4Def08e5d2354B41c4f23Ba6BfeC5811ef9",fetchData1);
//     console.log("From Sensor2 - 8044 - 0x3d38cb427212c11ee8E6e8D1Feb2AbbB3B0581a1",fetchData2);
}

getSensorData();