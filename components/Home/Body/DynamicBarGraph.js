import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { VictoryChart, VictoryBar } from "victory-native";

export default function DynamicBarGraph() {
  const [data, setData] = useState(getData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(getData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function getData() {
    const bars = random(6, 10);
    return Array.from({ length: bars }, (_, bar) => ({
      x: bar + 1,
      y: random(2, 10),
    }));
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <View style={GraphStyle.mainDiv}>
      <Text style={GraphStyle.headingText}>Insights</Text>
      <View style={GraphStyle.mainGraph}>
        <VictoryChart domainPadding={{ x: 20 }}>
          <VictoryBar
            data={data}
            style={{
              data: { fill: "tomato", width: 12 },
            }}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 5,
                  fill: "orange",
                }),
              },
            }}
          />
        </VictoryChart>
      </View>
    </View>
  );
}

const GraphStyle = StyleSheet.create({
  mainDiv: {
    paddingTop: 30,
  },
  headingText: {
    color: "#31363F",
    fontSize: 20,
    fontWeight: 600,
    paddingBottom: 5,
    paddingLeft: 22,
  },
  mainGraph: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
