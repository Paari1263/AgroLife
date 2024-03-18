import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import Notify from "./Profile";

export default function Header() {
  const currentHour = new Date().getHours();
  let greeting;
  if (currentHour < 12) {
    greeting = "Good morning !";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon !";
  } else {
    greeting = "Good evening !";
  }
  return (
    <View style={HeaderStyle.topBar}>
      <Text style={HeaderStyle.greetingText}>{greeting}</Text>
      <Notify />
    </View>
  );
}

const HeaderStyle = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  greetingText: {
    fontSize: 30,
    fontWeight: 500,
    color: "#31363F",
  },
});
