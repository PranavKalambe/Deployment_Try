const farm = require('./farm');

async function getSensorDataInfoById(){
    const camp = await farm.methods.getSensorDataInfoById("0xAEF26022d1FDD88b3494D58861f18d0761416365","0x3130300000000000000000000000000000000000000000000000000000000000").call();
    console.log(camp);
}

getSensorDataInfoById();