import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";

export default function WeatherDataBlock() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [place, setPlace] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [sunRiseTime, setSunRiseTimeStamp] = useState("");
  const [sunSetTime, setSunSetTimeStamp] = useState("");
  const [currentWindSpeed, setWindSpeed] = useState("");
  const [currentHumidity, setHumidity] = useState("");
  const API_KEY = "361d78ee85750ee52bd5d66951305268";

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Location Permission Error");
    }

    let loc = await Location.getCurrentPositionAsync({});

    setLatitude(loc.coords.latitude);
    setLongitude(loc.coords.longitude);
  };

  const getCurrentWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(encodeURI(url));
    //console.log(response.data);
    setWeatherIcon(response.data.weather[0].icon);
    setCurrentTemp(response.data.main.temp);
    setPlace(response.data.name);
    const sunRise = new Date(response.data.sys.sunrise * 1000);
    setSunRiseTimeStamp(sunRise.toTimeString().slice(0, 5));
    //console.log("Sunrise : ", sunRiseTime);
    const sunSet = new Date(response.data.sys.sunset * 1000);
    setSunSetTimeStamp(sunSet.toTimeString().slice(0, 5));
    //console.log("Sunset : ", sunSetTime);
    setWindSpeed(response.data.wind.speed);
    //console.log("Wind Speed : ", currentWindSpeed);
    setHumidity(response.data.main.humidity);
    //console.log("Humidity : ", currentHumidity);
  };

  const getWeatherLog = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(encodeURI(url));
    //const weatherLog = response.data.list;
  };

  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    getLocationAsync();
    getWeatherLog();
    getCurrentWeather();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <View style={WeatherDataBlockStyle.dataDisplay}>
      <View style={WeatherDataBlockStyle.row1}>
        <Text style={WeatherDataBlockStyle.currentPlace}>Thiruporur</Text>
        <Image
          style={WeatherDataBlockStyle.currentWeatherIcon}
          source={{
            uri: `https://openweathermap.org/img/wn/${weatherIcon}.png`,
          }}
        />
        <Text style={WeatherDataBlockStyle.currentTemp}>{`${Math.round(
          parseInt(currentTemp)
        )}°C`}</Text>
      </View>
      <View style={WeatherDataBlockStyle.row2}>
        <View style={WeatherDataBlockStyle.windSpeedBlock}>
          <FontAwesomeIcon
            icon={faWind}
            transform="grow-10"
            style={WeatherDataBlockStyle.windSpeedIcon}
          />
          <Text style={WeatherDataBlockStyle.windSpeedData}>
            {currentWindSpeed} m/s
          </Text>
          <Text style={WeatherDataBlockStyle.windSpeedText}>Wind</Text>
        </View>
        <View style={WeatherDataBlockStyle.humidityBlock}>
          <View>
            <FontAwesomeIcon
              icon={faDroplet}
              transform="grow-10"
              style={WeatherDataBlockStyle.humidityIcon}
            />
          </View>
          <Text style={WeatherDataBlockStyle.humidityData}>
            {currentHumidity} %
          </Text>
          <Text style={WeatherDataBlockStyle.humidityText}>Humidity</Text>
        </View>
      </View>
    </View>
  );
}

const WeatherDataBlockStyle = StyleSheet.create({
  dataDisplay: {
    marginLeft: 30,
    width: 340,
    height: 200,
    backgroundColor: "white",
    flexDirection: "column",
    borderRadius: 15,
  },
  currentPlace: {
    fontSize: 20,
    fontWeight: "bold", // Changed from 500 to 'bold'
  },
  currentWeatherIcon: {
    width: 80,
    height: 80,
  },
  currentTemp: {
    fontWeight: "bold", // Changed from 500 to 'bold'
    fontSize: 20,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  windSpeedBlock: {
    flexDirection: "column",
    height: 120,
    alignItems: "center", // Center align the wind block
    overflow: "hidden",
  },
  windSpeedData: {
    fontWeight: "bold", // Changed from "bold" to 'bold'
  },
  windSpeedIcon: {
    margin: 0, // Removed margin
    padding: 0, // Removed padding
    height: 50, // Adjusted height for full visibility
    width: 10, // Adjusted width for appropriate size
    aspectRatio: 1, // Maintain aspect ratio
    resizeMode: "contain", // Ensure the entire icon is visible
    overflow: "visible", // Set overflow to "visible" to prevent cropping
  },
  humidityBlock: {
    flexDirection: "column",
    height: 120,
    alignItems: "center", // Center align the humidity block
  },
  humidityData: {
    fontWeight: "bold", // Changed from "bold" to 'bold'
  },
  humidityIcon: {
    margin: 0, // Removed margin
    padding: 0, // Removed padding
    height: 50, // Adjusted height for full visibility
    width: 10, // Adjusted width for appropriate size
    aspectRatio: 1, // Maintain aspect ratio
    resizeMode: "contain", // Ensure the entire icon is visible
    overflow: "visible", // Set overflow to "visible" to prevent cropping
  },
});
