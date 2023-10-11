import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import StockReturnCalculator from './StockReturnCalculator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StockReturnCalculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
