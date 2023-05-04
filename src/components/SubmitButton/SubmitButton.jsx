import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';

const SubmitButton = ({ title = 'Enviar' }) => {
  return (
    <TouchableOpacity className="bg-green-300 rounded-md p-2 items-center w-full mt-5">
      <Text className="text-white font-bold text-xl tracking-widest">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
