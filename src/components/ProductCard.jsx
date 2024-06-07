import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";

export default function ProductCard({ item }) {
  const { id, name, price, image } = item;
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === id);

    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <View style={styles.container}>
      <Card mode="contained">
        <Card.Cover source={image} />
        <Card.Content>
          <Text variant="bodyMedium">{name}</Text>
          <Text variant="titleMedium">${price}</Text>
        </Card.Content>
        <Card.Actions>
          {isInCart ? (
            <Button
              buttonColor="#48B750"
              mode="contained"
              onPress={() => dispatch(remove(item))}
            >
              Remove
            </Button>
          ) : (
            <Button mode="contained" onPress={() => dispatch(add(item))}>
              Add To Cart
            </Button>
          )}
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
