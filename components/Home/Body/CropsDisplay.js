import { View, Pressable, StyleSheet } from "react-native";
import Crop from "./Crop";
import Overview from "./Overview";
import Rice from "./Rice";
import Corn from "./Corn";
import Wheat from "./Wheat";
import CropNavigation from "./CropNavigation";

export default function CropsDisplay({ handleChange }) {
  const crops = ["Rice", "Wheat", "Corn"];
  return (
    <View style={CropsDisplayStyle.box}>
      <Overview handleChange={handleChange} />
      <Rice handleChange={handleChange} />
      <Wheat handleChange={handleChange} />
      <Corn handleChange={handleChange} />
    </View>
  );
}

const CropsDisplayStyle = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
    marginTop: 25,
    height: 35,
  },
  overviewText: {
    padding: 8,
  },
});
