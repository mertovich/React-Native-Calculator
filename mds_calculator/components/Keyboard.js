import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const Keyboard = props => {
  return (
    <View>
      <View style={styles.keyboardArea}>
        <View style={styles.keyboardContainer}>
          <View style={styles.Row}>
            <Pressable
              onPress={() => props.button7()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>7</Text>
            </Pressable>
            <Pressable
              onPress={() => props.button8()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>8</Text>
            </Pressable>
            <Pressable
              onPress={() => props.button9()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>9</Text>
            </Pressable>
            <Pressable
              onPress={() => props.buttonDivide()}
              style={styles.keyboardButton}>
              <Text style={styles.calculateCommandText}>/</Text>
            </Pressable>
          </View>
          <View style={styles.Row}>
            <Pressable
              onPress={() => props.button4()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>4</Text>
            </Pressable>
            <Pressable
              onPress={() => props.button5()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>5</Text>
            </Pressable>
            <Pressable
              onPress={() => props.button6()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>6</Text>
            </Pressable>
            <Pressable
              onPress={() => props.buttonMultiply()}
              style={styles.keyboardButton}>
              <Text style={styles.calculateCommandText}>X</Text>
            </Pressable>
          </View>
          <View style={styles.Row}>
            <Pressable
              onPress={() => props.button1()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>1</Text>
            </Pressable>
            <Pressable
              onPress={() => props.button2()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>2</Text>
            </Pressable>
            <Pressable
              onPress={() => props.button3()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>3</Text>
            </Pressable>
            <Pressable
              onPress={() => props.buttonPlus()}
              style={styles.keyboardButton}>
              <Text style={styles.calculateCommandText}>+</Text>
            </Pressable>
          </View>
          <View style={styles.Row}>
            <Pressable
              onPress={() => props.buttonAC()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>AC</Text>
            </Pressable>
            <Pressable
              onPress={() => props.button0()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>0</Text>
            </Pressable>
            <Pressable
              onPress={() => props.buttonDot()}
              style={styles.keyboardButton}>
              <Text style={styles.keyboardButtonText}>.</Text>
            </Pressable>
            <Pressable
              onPress={() => props.buttonMinus()}
              style={styles.keyboardButton}>
              <Text style={styles.calculateCommandText}>-</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => props.buttonEqual()}
            style={styles.keyboardButton}>
            <Text style={styles.calculateCommandText}>=</Text>
          </Pressable>
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
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Keyboard;
