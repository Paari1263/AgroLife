import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import Crop from "./Crop";

export default function CropsDisplay() {
  const crops = ["Overview", "Rice", "Wheat", "Corn", "Ragi"];
  return (
    <View style={CropsDisplayStyle.box}>
      {crops.map((crop) => (
        <Crop name={crop} key={crop} />
      ))}
    </View>
  );
}

const CropsDisplayStyle = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
  },
});
