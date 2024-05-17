import { View, Text, StyleSheet } from "react-native";
import WeatherDataBlock from "./WeatherDataBlock";

export default function WeatherDisplay() {
  return (
    <View style={WeatherDisplayStyle.main}>
      <Text style={WeatherDisplayStyle.headingText}>Weather</Text>
      <WeatherDataBlock />
    </View>
  );
}

const WeatherDisplayStyle = StyleSheet.create({
  main: {
    paddingTop: 55,
    paddingLeft: 20,
  },
  headingText: {
    color: "#31363F",
    fontSize: 20,
    fontWeight: 600,
    paddingBottom: 15,
  },
});
