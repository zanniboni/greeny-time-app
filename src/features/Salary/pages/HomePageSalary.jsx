import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Header from '../Layout/Header';
import Calendar from '../Calendar/Calendar';
import useFetch from '../../../hooks/useFetch';
import { baseUrl } from '../../../enviroments/enviroment';
import { useState } from 'react';

const HomePageSalary = () => {
  const { loading, error, data, fetchData } = useFetch();
  const [salary, setSalary] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const getDateFromCalendar = childData => {
    setPaymentDate(childData);
  };

  const sendDataToBackend = () => {
    fetchData({
      url: `${baseUrl}/salary`,
      method: 'POST',
      body: JSON.stringify({
        value: salary,
        payment_date: paymentDate,
      }),
    });
  };

  return (
    <>
      <Header />
      <Text>Salário bruto</Text>
      <View className="items-center w-full">
        <View className="w-10/12">
          <View className="w-full">
            <TextInput
              className="h-12 border-gray border-2 px-2 rounded-sm"
              placeholder={'R$ 10.000,00'}
              onChangeText={setSalary}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <Calendar parentCallback={getDateFromCalendar} />
      <View>
        <TouchableOpacity
          className="mt-1 py-2 text-center w-full items-center justify-center bg-green-300 h-12 rounded-xl"
          onPress={sendDataToBackend}
        >
          <Text className="text-white font-bold text-xl w-full text-center">
            Enviar
          </Text>
          {loading && <Text>Loading...</Text>}
          {error && <Text>Error: {error.message}</Text>}
          {data && []}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomePageSalary;
