import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Screen from './components/Screen';
import Keyboard from './components/Keyboard';

const App = () => {
  const [Input, setInput] = useState('');
  const [Result, setResult] = useState('');

  const button1 = () => {
    let tmp = Input;
    tmp = Input + '1';
    setInput(tmp);
  };
  const button2 = () => {
    let tmp = Input;
    tmp = Input + '2';
    setInput(tmp);
  };
  const button3 = () => {
    let tmp = Input;
    tmp = Input + '3';
    setInput(tmp);
  };
  const button4 = () => {
    let tmp = Input;
    tmp = Input + '4';
    setInput(tmp);
  };
  const button5 = () => {
    let tmp = Input;
    tmp = Input + '5';
    setInput(tmp);
  };
  const button6 = () => {
    let tmp = Input;
    tmp = Input + '6';
    setInput(tmp);
  };
  const button7 = () => {
    let tmp = Input;
    tmp = Input + '7';
    setInput(tmp);
  };
  const button8 = () => {
    let tmp = Input;
    tmp = Input + '8';
    setInput(tmp);
  };
  const button9 = () => {
    let tmp = Input;
    tmp = Input + '9';
    setInput(tmp);
  };
  const button0 = () => {
    let tmp = Input;
    tmp = Input + '0';
    setInput(tmp);
  };
  const buttonAC = () => {
    setInput('');
  };
  const buttonDot = () => {
    let tmp = Input;
    tmp = Input + '.';
    setInput(tmp);
  };

  const buttonPlus = () => {
    let tmp = Input;
    tmp = Input + '+';
    setInput(tmp);
  };
  const buttonMinus = () => {
    let tmp = Input;
    tmp = Input + '-';
    setInput(tmp);
  };
  const buttonMultiply = () => {
    let tmp = Input;
    tmp = Input + '*';
    setInput(tmp);
  };
  const buttonDivide = () => {
    let tmp = Input;
    tmp = Input + '/';
    setInput(tmp);
  };
  const buttonEqual = () => {
    let tmp = Input;
    let tmpList;
    let result = 0;

    if (tmp.includes('+')) {
      tmpList = Input.split('+');
      tmpList.forEach(element => {
        result += parseFloat(element);
      });
      setResult(result);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Screen Input={Input} Result={Result} />
      <Keyboard
        button0={button0}
        button1={button1}
        button2={button2}
        button3={button3}
        button4={button4}
        button5={button5}
        button6={button6}
        button7={button7}
        button8={button8}
        button9={button9}
        buttonAC={buttonAC}
        buttonDot={buttonDot}
        buttonPlus={buttonPlus}
        buttonMinus={buttonMinus}
        buttonMultiply={buttonMultiply}
        buttonDivide={buttonDivide}
        buttonEqual={buttonEqual}
      />
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
