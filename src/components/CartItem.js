import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const CartItem = ({ item, onRemove, onChangeQuantity }) => {
  const [step, setStep] = useState('1');

  const handleStepChange = (text) => {
    setStep(text.replace(/[^0-9]/g, '')); 
  };

  const getStepValue = () => {
    const value = parseInt(step);
    return isNaN(value) || value <= 0 ? 1 : value;
  };

  const handleDecrease = () => {
    const newQty = item.quantity - getStepValue();
    if (newQty >= 0) {
      onChangeQuantity(item.id, newQty);
    }
  };

  const handleIncrease = () => {
    const newQty = item.quantity + getStepValue();
    onChangeQuantity(item.id, newQty);
  };

  return (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>₴{item.price} x {item.quantity}</Text>
      <Text>Сума: ₴{item.price * item.quantity}</Text>

      <View style={styles.quantityRow}>
        <Button title="−" onPress={handleDecrease} />
        <Text style={styles.label}>Крок</Text>
        <TextInput
          style={styles.stepInput}
          keyboardType="numeric"
          value={step}
          onChangeText={handleStepChange}
        />
        <Button title="+" onPress={handleIncrease} />
      </View>

      <Button title="Видалити" onPress={() => onRemove(item.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: { padding: 10, borderBottomWidth: 1 },
  name: { fontWeight: 'bold', fontSize: 16 },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    gap: 5,
  },
  stepInput: {
    width: 40,
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center',
    padding: 0,
    marginHorizontal: 5,
  },
  label: {
    marginHorizontal: 4,
  },
});

export default CartItem;
