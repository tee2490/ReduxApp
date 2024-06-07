import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";

export default function ProductCard({ item }) {
  const { id, name, price, image } = item;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Card mode="contained">
        <Card.Cover source={image} />
        <Card.Content>
          <Text variant="bodyMedium">{name}</Text>
          <Text variant="titleMedium">${price}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => dispatch(add(item))}>
            Add To Cart
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
