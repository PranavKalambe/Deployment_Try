  //MQTT
//   const mqtt = require('mqtt')
 const mqtt = require('./mqtt');
  var client  = mqtt.connect('ws://localhost:1883')

  client.on('connect', function () {
    client.subscribe('topic/test')
    //client.publish('MUMS1/Data', 'Hello mqtt')
  })

  client.on('message', function (topic, message) {
    // message is Buffer
    //console.log(message.toString())
    if (topic == 'topic/test'){
      console.log(message.toString());
    }

    //client.end()
  })
