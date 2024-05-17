import { View, Text } from "react-native";
import React from "react";
import PieChart from "react-native-pie-chart";

export default function ChartDisplay() {
  const widthAndHeight = 225;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ["#F38181", "#95E1D3", "#FCE38A", "#D6F7AD", "#FFB562"];
  return (
    <View style={{ paddingLeft: 100, paddingTop: 45 }}>
      <Text
        style={{
          zIndex: 1,
          marginLeft: 62,
          marginTop: 100,
          fontWeight: "500",
          fontSize: 18,
        }}>
        {" "}
        Field Water
      </Text>
      <View style={{ position: "absolute" }}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.45}
          coverFill={"#FFF"}
        />
      </View>
    </View>
  );
}
