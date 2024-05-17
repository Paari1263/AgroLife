import { Text, View, Image } from "react-native";
import Header from "./Header/Header";
import CropsDisplay from "./Body/CropsDisplay";
import SensorsDisplay from "./Body/SensorsDisplay";
import WeatherDisplay from "./Body/WeatherDisplay";
import ChartDisplay from "./Body/ChartDisplay";
import { useState } from "react";
import DynamicBarGraph from "./Body/DynamicBarGraph";

export default function Home() {
  const [pressedBox, setPressedBox] = useState("Overview");

  function handleChange(name) {
    setPressedBox(name);
  }

  function renderBoxContent() {
    if (pressedBox === "Overview") {
      return (
        <View>
          <WeatherDisplay />
          <ChartDisplay />
        </View>
      );
    } else {
      return (
        <View>
          <SensorsDisplay />
          <DynamicBarGraph />
        </View>
      );
    }
  }

  return (
    <View style={{ marginTop: 40 }}>
      <Header />
      <CropsDisplay handleChange={handleChange} />
      {renderBoxContent()}
    </View>
  );
}
