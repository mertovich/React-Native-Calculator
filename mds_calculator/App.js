import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Screen from './components/Screen';
import Keyboard from './components/Keyboard';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Screen />
      <Keyboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#22252D',
    height: '100%',
  },
});

export default App;
