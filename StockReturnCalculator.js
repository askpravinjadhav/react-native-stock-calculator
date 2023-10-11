import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground } from 'react-native';

const StockReturnCalculator = () => {
  const [initialPrice, setInitialPrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [numberOfShares, setNumberOfShares] = useState('');
  const [returnOnInvestment, setReturnOnInvestment] = useState('');

  const calculateReturn = () => {
    const initial = parseFloat(initialPrice);
    const current = parseFloat(currentPrice);
    const shares = parseInt(numberOfShares);

    if (!isNaN(initial) && !isNaN(current) && !isNaN(shares) && shares > 0) {
      const totalInvestment = initial * shares;
      const currentValue = current * shares;
      const roi = ((currentValue - totalInvestment) / totalInvestment) * 100;
      setReturnOnInvestment(roi.toFixed(2) + '%');
    } else {
      setReturnOnInvestment('Invalid inputs');
    }
  };

  return (
    <ImageBackground source={require('./assets/stockmarket.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Initial Stock Price"
          keyboardType="numeric"
          value={initialPrice}
          onChangeText={(text) => setInitialPrice(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Current Stock Price"
          keyboardType="numeric"
          value={currentPrice}
          onChangeText={(text) => setCurrentPrice(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Shares"
          keyboardType="numeric"
          value={numberOfShares}
          onChangeText={(text) => setNumberOfShares(text)}
        />
        <Button title="Calculate ROI" onPress={calculateReturn} />
        <Text style={styles.result}>{returnOnInvestment}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a semi-transparent white background
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StockReturnCalculator;
