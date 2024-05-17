import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Paho from "paho-mqtt";

export default function SensorDataBlock(props) {
  const client = new Paho.Client(
    "broker.hivemq.com",
    Number(8000),
    `agrolife-app-${parseInt(Math.random() * 100)}`
  );

  const [soilMoisture, setSoilMoisture] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);

  const connectMQTT = () => {
    client.connect({
      onSuccess: () => {
        client.subscribe("soil");
        client.subscribe("temp");
        client.subscribe("humidity");
        client.onMessageArrived = onMessage;
        console.log("connected");
      },
      onFailure: () => {
        console.log("Failed to connect to MQTT broker!");
      },
    });
  };

  const onMessage = (message) => {
    console.log(message);
    switch (message.destinationName) {
      case "soil":
        setSoilMoisture(parseInt(message.payloadString));
        break;
      case "temp":
        setTemperature(parseInt(message.payloadString));
        break;
      case "humidity":
        setHumidity(parseInt(message.payloadString));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    connectMQTT();
  }, []);

  return (
    <View style={SensorDataBlockStyle.box}>
      {props.name == "Moisture" ? (
        <Text style={SensorDataBlockStyle.dataText}>{soilMoisture}</Text>
      ) : props.name == "Temperature" ? (
        <Text style={SensorDataBlockStyle.dataText}>{`${temperature}°C`}</Text>
      ) : (
        <Text style={SensorDataBlockStyle.dataText}>{`${humidity}%`}</Text>
      )}
      <Text style={SensorDataBlockStyle.nameText}>{props.name}</Text>
    </View>
  );
}

const SensorDataBlockStyle = StyleSheet.create({
  box: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dataText: {
    textAlign: "center",
    paddingTop: 15,
    fontSize: 20,
    fontWeight: 1000,
  },
  nameText: {
    paddingTop: 6,
    textAlign: "center",
    fontWeight: 700,
  },
});
