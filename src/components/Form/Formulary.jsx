import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import isValidPositiveNumber from '../Validators/IsValidPositiveNumbers';

const Formulary = ({ placeholder, style }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
    setErrorMessage(isValidPositiveNumber(text));
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={inputValue}
          onChangeText={handleInputChange}
          keyboardType="numeric"
        />
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  infoText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 24,
  },
  errorText: {
    color: 'red',
  },
  toastContainer: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 50,
  },
});

export default Formulary;
