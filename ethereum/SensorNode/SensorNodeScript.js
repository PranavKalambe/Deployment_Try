const farm = require('./farm');
const Web3 = require('web3')

const sensorNodeAddr = "0xded13661c0a1f624144d4f3b2fa7e5de894b470c";
const farmManagerAddr = "0xafbaeb2d0b548f140ed88690065c01676617acf9";


function stringToBytes32(inputString) {
    const web3 = new Web3();
    const hexString = web3.utils.asciiToHex(inputString);
    const bytes32 = web3.utils.padRight(hexString, 64);
    return bytes32;
}


async function sendSensorDataToAuto() {
    let i=10;
    while(i<14){

    var randomNumber = Math.floor(Math.random() * 100) + 1;

    //change data id

    let data_id_string = i.toString();
    let data_id = stringToBytes32(data_id_string);
    console.log(data_id);

    let dataPoints = randomNumber;

    let data_hash_string = dataPoints.toString();
    let dataHash = stringToBytes32(data_hash_string);
    console.log(dataHash);

    let timestamp = "1676965404";

    let location = "0x6d756d6261690000000000000000000000000000000000000000000000000000";
    let farmManager = farmManagerAddr;

    console.log("Sending Sensor Data - ", randomNumber);

    await farm.methods.sendSensorDataTo(data_id, dataPoints, dataHash, timestamp, location, farmManager).send({
        from:  sensorNodeAddr,
    });

    console.log("Data Sent Successfully - ", dataPoints);
    i++;

    }
}

sendSensorDataToAuto();
