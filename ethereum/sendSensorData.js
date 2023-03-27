const farm = require('./farm');

// const obj = [
//     {
//         data_id: "0x3100000000000000000000000000000000000000000000000000000000000000",
//         dataPoints: 500,
//         dataHash: "0x3130300000000000000000000000000000000000000000000000000000000000",
//         timestamp: "1676965404",
//         location: "0x6d756d6261690000000000000000000000000000000000000000000000000000",
//         addr: "0x5F17d3B125792292F98f024DF93C6A4549B264d9",
//     }
// ]

let data_id = "0x9100000000000000000000000000000000000000000000000000000000000000";
let dataPoints = 777;
let dataHash = "0x3130300000000000000000000000000000000000000000000000000000000000";
let timestamp = "1676965404";
let location = "0x6d756d6261690000000000000000000000000000000000000000000000000000";
let farmManager = "0xeeaaa3691cbc42d72bb07e315ab7b0a6cbf98859";


async function sendSensorDataTo() {
    await farm.methods.sendSensorDataTo(data_id, dataPoints, dataHash, timestamp, location, farmManager).send({
        from:  "0x3d38cb427212c11ee8E6e8D1Feb2AbbB3B0581a1",
    });
}

sendSensorDataTo();