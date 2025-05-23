import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: product.image }} 
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>₴{product.price}</Text>
      <Button title="Додати до кошика" onPress={() => onAddToCart(product)} />
    </View>
  );
};

const { width } = Dimensions.get('window');
const imageHeight = width * 0.5; // 50% від ширини екрану

const styles = StyleSheet.create({
  card: { 
    padding: 10, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: imageHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: { 
    fontWeight: 'bold', 
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: { 
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductCard;