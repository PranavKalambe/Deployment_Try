const farm = require('./farm');

async function getSensorData(addr){
    // console.log("Farm Manager Working fetching data")

    // sensor 1
    var length = await farm.methods.getSensorDataCount(addr).call();
    for (let index = 0; index < length; index++) {
        const fetchData1 = await farm.methods.getSensorDataInfo(addr,index).call();
        console.log('Index: ',index,'\n', fetchData1,'\n');
    }
}

// console.log("From Sensor Node1")
let sensor1 = "0xb2467da18577c452c36abc0aa66dcdaf55e3ec01";
getSensorData(sensor1);

// console.log("From Sensor Node2")
// let sensor2 = "0xD496cfBFdFfBE65D47a5eEcc1251fB07Cb65972a";
// getSensorData(sensor2);

// console.log("From Sensor Node3")
// let sensor3 = "";
// getSensorData(sensor3);