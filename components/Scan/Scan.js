import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../Home/Header/Header";
import Upload from "./Upload";
import { ImagePicker } from "expo-image-picker";

export default function Scan() {
  return (
    <View>
      <View style={{ marginTop: 40 }}>
        <Header />
      </View>
      <View style={ScanPageStyle.description}>
        <Text style={ScanPageStyle.headingText}> Upload the Picture</Text>
        <Text style={ScanPageStyle.detailText}>
          Take a picture of your disease crop and upload in this field below
          here. And get great insights, on how to take any precautive measures
          and protect the crop.
        </Text>
      </View>
      <View style={{ marginTop: 25 }}>
        <Upload />
      </View>
    </View>
  );
}

var ScanPageStyle = StyleSheet.create({
  description: {
    marginTop: 40,
    paddingLeft: 12,
  },
  headingText: {
    fontWeight: 500,
    fontSize: 25,
  },
  detailText: {
    paddingTop: 10,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
