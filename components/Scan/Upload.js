import { ImagePicker } from "expo-image-picker";
import { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons/faCloudArrowUp";

export default function Upload() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={faCloudArrowUp}
        onPress={pickImage}
        size={80}
        style={styles.icon}
        bounce
      />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: 20, // Adjust this value as needed
    color: "#74C0FC",
  },
  button: {
    marginTop: 20, // Adjust this value as needed
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20, // Adjust this value as needed
  },
});
