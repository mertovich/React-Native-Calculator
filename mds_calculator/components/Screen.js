import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Screen = () => {
  return (
    <View>
      <View style={styles.calculateContainer}>
        <Text style={styles.calculateText}>Calculate Text</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Result Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculateContainer: {
    marginTop: '25%',
  },
  calculateText: {
    marginRight: '5%',
    textAlign: 'right',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  resultContainer: {},
  resultText: {
    marginRight: '5%',
    textAlign: 'right',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
  },
});

export default Screen;
