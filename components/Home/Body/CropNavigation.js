import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Overview from "./Overview";
import Rice from "./Rice";
import Corn from "./Corn";
import Wheat from "./Wheat";

const Stack = createNativeStackNavigator();

export default function CropNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Overview"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Rice" component={Rice} />
        <Stack.Screen name="Wheat" component={Wheat} />
        <Stack.Screen name="Corn" component={Corn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
