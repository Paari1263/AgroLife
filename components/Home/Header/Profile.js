import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View>
      <Image
        source={require("../../../assets/images/user.png")}
        style={ProfileStyle.notifyIcon}
      />
    </View>
  );
}

const ProfileStyle = StyleSheet.create({
  notifyIcon: {
    width: 25,
    height: 25,
  },
});
