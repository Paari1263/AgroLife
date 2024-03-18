import { Text, View, Image } from "react-native";
import Header from "./Header/Header";
import CropsDisplay from "./Body/CropsDisplay";

export default function Home() {
  return (
    <View>
      <Header />
      <CropsDisplay />
    </View>
  );
}
