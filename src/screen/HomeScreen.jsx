import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import ProductCard from "../components/ProductCard";
import { LinearGradient } from "expo-linear-gradient";

const products = [
  {
    id: 1,
    name: "Sony Wh-Ch510 Bluetooth Wireless",
    price: 149,
    image: require("../Images/1001.png"),
  },
  {
    id: 2,
    name: "boAt Rockerz 450",
    price: 49,
    image: require("../Images/1002.png"),
  },
  {
    id: 3,
    name: "JBL Tune 760NC",
    price: 179,
    image: require("../Images/1003.png"),
  },
  {
    id: 4,
    name: "Logitech H111 Wired",
    price: 39,
    image: require("../Images/1004.png"),
  },
  {
    id: 5,
    name: "APPLE Airpods Max Bluetooth Headset",
    price: 199,
    image: require("../Images/1005.png"),
  },
  {
    id: 6,
    name: "ZEBRONICS Zeb-Thunder Wired",
    price: 29,
    image: require("../Images/1006.png"),
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(25, 107, 40, 0.8)", "transparent"]}
        style={styles.background}
      />

      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item, index }) => (
          <ProductCard key={index} item={item} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
