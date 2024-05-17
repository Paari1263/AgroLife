import { Text, View, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import SensorDataBlock from "./SensorDataBlock";

export default function Sensor(props) {
  return (
    <View>
      {props.name == "Moisture" ? (
        <View style={SensorBoxStyle.box}>
          <ImageBackground
            style={SensorBoxStyle.bgImage}
            imageStyle={{ borderRadius: 13 }}
            source={require("../../../assets/images/greenwave.jpg")}>
            <SensorDataBlock name={props.name} data={props.data} />
          </ImageBackground>
        </View>
      ) : props.name == "Temperature" ? (
        <View style={SensorBoxStyle.box}>
          <ImageBackground
            style={SensorBoxStyle.bgImage}
            imageStyle={{ borderRadius: 13 }}
            source={require("../../../assets/images/brownwave.jpg")}>
            <SensorDataBlock name={props.name} data={`${props.data}°C`} />
          </ImageBackground>
        </View>
      ) : (
        <View style={SensorBoxStyle.box}>
          <ImageBackground
            style={SensorBoxStyle.bgImage}
            imageStyle={{ borderRadius: 13 }}
            source={require("../../../assets/images/bluewave.jpg")}>
            <SensorDataBlock name={props.name} data={`${props.data}%`} />
          </ImageBackground>
        </View>
      )}
    </View>
  );
}

const SensorBoxStyle = StyleSheet.create({
  box: {
    width: 85,
    height: 85,
  },
  bgImage: {
    width: 85,
    height: 85,
    opacity: 0.8,
  },
});
