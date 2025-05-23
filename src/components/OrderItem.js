import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderItem = ({ order }) => (
  <View style={styles.order}>
    <Text>Дата: {order.date}</Text>
    <Text>Кількість товарів: {order.totalItems}</Text>
    <Text>Сума: ₴{order.total}</Text>
  </View>
);

const styles = StyleSheet.create({
  order: { padding: 10, borderBottomWidth: 1 },
});

export default OrderItem;
