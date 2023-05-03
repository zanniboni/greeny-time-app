import React from 'react';
import DateReadOnlyInput from '../DateInput/DateReadOnlyInput';
import { View, Text } from 'react-native';
import Header from '../Layout/Header';

const WorkHoursScreen = () => {
  return (
    <>
      <Header />
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-center">Horas trabalhadas</Text>
        </View>
        <View>
          <DateReadOnlyInput />
        </View>
      </View>
    </>
  );
};

export default WorkHoursScreen;
