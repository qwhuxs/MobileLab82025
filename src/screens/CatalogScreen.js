import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { addToCart } from "../redux/slices/cartSlice";
import { setProducts } from "../redux/slices/productsSlice";

const CatalogScreen = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCart={() => dispatch(addToCart(item))}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    padding: 10,
  },
});

export default CatalogScreen;