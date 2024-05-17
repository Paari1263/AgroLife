import { Text, View, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";

export default function Crop({ handleChange }) {
  const [press, setPress] = useState(false);
  return (
    <View style={CornBoxStyle.button}>
      <Pressable
        onPress={() => {
          setPress(!press);
          handleChange("Corn");
        }}
        style={({ pressed }) => [
          {
            backgroundColor: press ? "#EFBC9B" : "#E3E1D9",
            borderRadius: 30,
            height: "35px",
            alignItems: "center",
            padding: "5px",
          },
        ]}>
        <Text style={CornBoxStyle.leafIcon}>
          Corn {<FontAwesomeIcon icon={faLeaf} />}
        </Text>
      </Pressable>
    </View>
  );
}

const CornBoxStyle = StyleSheet.create({
  button: {
    margin: 10,
    width: 80,
  },
  leafIcon: {
    padding: 3,
  },
});
