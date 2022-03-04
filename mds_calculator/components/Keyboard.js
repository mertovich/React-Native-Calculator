import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const Keyboard = () => {
  return (
    <View>
      <View style={styles.keyboardArea}>
        <View style={styles.keyboardContainer}>
          <View style={styles.Row}>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>7</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>8</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>9</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.calculateCommandText}>/</Text>
            </Pressable>
          </View>
          <View style={styles.Row}>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>4</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>5</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>6</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.calculateCommandText}>X</Text>
            </Pressable>
          </View>
          <View style={styles.Row}>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>1</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>2</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>3</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.calculateCommandText}>+</Text>
            </Pressable>
          </View>
          <View style={styles.Row}>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>AC</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>0</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>.</Text>
            </Pressable>
            <Pressable style={styles.keyboardButton}>
              <Text style={styles.calculateCommandText}>=</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardArea: {
    marginTop: '5%',
    backgroundColor: '#292D36',
    height: '100%',
    borderRadius: 40,
  },
  keyboardContainer: {
    margin: '5%',
  },
  keyboardButton: {
    backgroundColor: '#22252D',
    borderRadius: 15,
    padding: '10%',
    margin: '2%',
  },
  keyboardButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  calculateCommandText: {
    color: '#F38080',
  },
});

export default Keyboard;
