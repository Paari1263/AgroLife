import { Text, View, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";

export default function Rice({ handleChange }) {
  const [press, setPress] = useState(false);
  return (
    <View style={RiceBoxStyle.button}>
      <Pressable
        onPress={() => {
          setPress(!press);
          handleChange("Rice");
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
        <Text style={RiceBoxStyle.leafIcon}>
          Rice {<FontAwesomeIcon icon={faLeaf} />}
        </Text>
      </Pressable>
    </View>
  );
}

const RiceBoxStyle = StyleSheet.create({
  button: {
    margin: 10,
    width: 80,
  },
  leafIcon: {
    padding: 3,
  },
});
