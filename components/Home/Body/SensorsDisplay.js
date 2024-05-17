import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import Sensor from "./Sensor";

export default function SensorsDisplay() {
  const sensors = [
    {
      name: "Moisture",
      data: 90,
    },
    {
      name: "Temperature",
      data: 30,
    },
    {
      name: "Humidity",
      data: 40,
    },
  ];
  return (
    <View style={SensorsDisplayStyle.main}>
      <Text style={SensorsDisplayStyle.headingText}>Sensors</Text>
      <View style={SensorsDisplayStyle.box}>
        {sensors.map((sensor) => (
          <Sensor name={sensor.name} key={sensor.name} />
        ))}
      </View>
    </View>
  );
}

const SensorsDisplayStyle = StyleSheet.create({
  main: {
    paddingLeft: 20,
    paddingTop: 55,
  },
  headingText: {
    color: "#31363F",
    fontSize: 20,
    fontWeight: 600,
    paddingBottom: 15,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
