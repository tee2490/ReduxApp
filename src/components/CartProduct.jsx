import { StyleSheet, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { Button, Card, Text } from "react-native-paper";

export default function CartProduct({ item }) {
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
          <Button
            buttonColor="brown"
            mode="contained"
            onPress={() => dispatch(remove(item))}
          >
            Remove
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
    marginVertical: 10,
  },
});
