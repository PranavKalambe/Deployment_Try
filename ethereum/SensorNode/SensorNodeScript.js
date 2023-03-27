const farm = require('./farm');
let i = 101;

// function generateRandData(){
                                                                                                                                                                                                  
//     console.log(randomNumber);
//     return randomNumber;
// }
async function sendSensorDataToAuto() {

    let i=1;
    while(i<4){
        
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    //change data id
    let data_id = "0x9100000000000000000000000000000000000000000000000000000000000000";
    let dataPoints = randomNumber;
    let dataHash = "0x3130300000000000000000000000000000000000000000000000000000000000";
    let timestamp = "1676965404";
    let location = "0x6d756d6261690000000000000000000000000000000000000000000000000000";
    let farmManager = "0xeeaaa3691cbc42d72bb07e315ab7b0a6cbf98859";
    console.log("Sending Sensor Data - ", randomNumber);

    await farm.methods.sendSensorDataTo(data_id, dataPoints, dataHash, timestamp, location, farmManager).send({
        from:  "0x3d38cb427212c11ee8E6e8D1Feb2AbbB3B0581a1",
    });
    console.log("Data Sent Successfully - ", dataPoints);
    i++;
    }
  

}

sendSensorDataToAuto();
