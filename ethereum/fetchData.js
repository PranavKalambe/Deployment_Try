const farm = require('./farm');

async function getSensorDataInfoById(){
    const camp = await farm.methods.getSensorDataInfoById("address","id").call();
    console.log(camp);
}

getSensorDataInfoById();