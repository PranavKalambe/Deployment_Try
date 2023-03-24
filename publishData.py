import time
import paho.mqtt.client as mqtt
from random import randint

mqtt_client=mqtt.Client()
mqtt_client.connect("localhost",1883,60)
# mqtt_client.publish("topic/test", "Hello world!")
# # mqtt_client.disconnect()
# mqttc.loop_start()

while 1:
    t = randint(1,100)
    (result,mid)=mqtt_client.publish("topic/test",t,2)
    time.sleep(5)
    print(t)