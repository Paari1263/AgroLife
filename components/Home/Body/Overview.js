import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Overview({ handleChange }) {
  const [press, setPress] = useState(false);
  return (
    <View>
      <Pressable
        onPress={() => {
          setPress(!press);
          handleChange("Overview");
        }}
        style={({ pressed }) => [
          {
            backgroundColor: press ? "#EFBC9B" : "#E3E1D9",
            borderRadius: 30,
            height: "35px",
            alignItems: "center",
            margin: 9,
            width: 90,
          },
        ]}>
        <Text style={OverviewDisplayStyle.overviewText}>Overview</Text>
      </Pressable>
    </View>
  );
}

const OverviewDisplayStyle = StyleSheet.create({
  overviewText: {
    padding: 8,
  },
});
