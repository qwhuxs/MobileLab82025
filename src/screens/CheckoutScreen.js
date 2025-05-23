import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { addOrder } from '../redux/slices/ordersSlice';
import { setUser } from '../redux/slices/userSlice';
import { validateEmail } from '../utils/validators';

const CheckoutScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!name || !email || !validateEmail(email)) {
      Alert.alert('Помилка', 'Введіть коректні ім’я та email');
      return;
    }
    const order = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cartItems,
      total,
    };
    dispatch(addOrder(order));
    dispatch(setUser({ name, email }));
    dispatch(clearCart());
    Alert.alert('Успіх', 'Замовлення оформлено');
    navigation.navigate('Catalog');
  };

  return (
    <View style={styles.container}>
      <Text>Ім’я</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Button title="Підтвердити замовлення" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default CheckoutScreen;