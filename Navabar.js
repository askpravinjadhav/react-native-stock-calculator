import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => (
  <View style={styles.navbar}>
    <Text style={styles.navbarText}>Your App Name</Text>
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
  },
  navbarText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Navbar;
