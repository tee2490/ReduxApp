import { StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import { useSelector } from "react-redux";
import { Badge } from "react-native-paper";

const Tab = createBottomTabNavigator();

export default function Navigators() {
  const cartList = useSelector((state) => state.cartState.cartList);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "HOME") {
                iconName = "home";
              } else if (route.name === "CART") {
                iconName = "cart";
                return (
                  <View>
                    <Ionicons name={iconName} size={size} color={color} />
                    <Badge
                      size={15}
                      style={{ position: "absolute", top: -5, right: -5 }}
                    >
                      {cartList.length}
                    </Badge>
                  </View>
                );
              } else if (route.name === "SETTING") {
                iconName = "settings";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen opti name="CART" component={CartScreen} />
          <Tab.Screen name="SETTING" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
