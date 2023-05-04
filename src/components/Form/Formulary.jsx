import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import isValidPositiveNumber from '../Validators/IsValidPositiveNumbers';

const Formulary = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
    setErrorMessage(isValidPositiveNumber(text));
  };

  return (
    <View className="justify-center items-center">
      <View className="w-full">
        <TextInput
          className="border-gray-500 border-2 h-12 px-2 rounded-sm"
          placeholder={placeholder}
          value={inputValue}
          onChangeText={handleInputChange}
          keyboardType="numeric"
        />
        {errorMessage ? (
          <Text className="text-red-400">{errorMessage}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default Formulary;
