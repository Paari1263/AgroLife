import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Home from "./components/Home/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit: require("./assets/fonts/Outfit-VariableFont_wght.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Outfit",
    paddingTop: 30,
  },
});
