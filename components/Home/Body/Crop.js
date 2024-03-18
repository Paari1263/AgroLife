import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function Crop(props) {
  return (
    <View style={CropBoxStyle.button}>
      <Text>
        {props.name} {<FontAwesomeIcon icon="fa-regular fa-leaf" />}
      </Text>
    </View>
  );
}

const CropBoxStyle = StyleSheet.create({
  button: {
    backgroundColor: "#FFEDD8",
    borderRadius: 50,
    height: "35px",
    margin: 10,
    alignItems: "center",
    padding: "5px",
  },
});
