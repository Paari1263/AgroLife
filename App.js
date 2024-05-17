import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Home from "./components/Home/Home";
import Scan from "./components/Scan/Scan";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit: require("./assets/fonts/Outfit-VariableFont_wght.ttf"),
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}>
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "#1A4D2E" : "#111"}
                  />
                  <Text style={{ fonSize: 12, color: "#1A4D2E" }}>HOME</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Scan"
          component={Scan}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}>
                  <Ionicons
                    name="scan-circle-sharp"
                    size={24}
                    color={focused ? "#1A4D2E" : "#111"}
                  />
                  <Text style={{ fonSize: 12, color: "#1A4D2E" }}>UPLOAD</Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E3",
    fontFamily: "Outfit",
    paddingTop: 30,
  },
});
