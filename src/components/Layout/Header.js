import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ title }) => {
  return (
    <View className="w-full h-20 flexc-row items-center justify-center bg-green-300">
      <MaterialIcons name="access-time" size={24} color="#fff" />
      <Text className="font-bold text-2xl text-white tracking-widest">
        {title}
      </Text>
    </View>
  );
};

export default Header;
