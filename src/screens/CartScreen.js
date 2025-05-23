import React from "react";
import { View, FlatList, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onRemove={() => dispatch(removeFromCart(item.id))}
            onChangeQuantity={(id, qty) =>
              dispatch(updateQuantity({ id, quantity: qty }))
            }
          />
        )}
      />
      <Text style={styles.total}>Загальна сума: {total} грн</Text>
      <Button
        title="Оформити замовлення"
        onPress={() => navigation.navigate("Checkout")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  total: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
});

export default CartScreen;
