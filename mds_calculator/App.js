import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>App</Text>
      </View>
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
