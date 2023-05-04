import { useState } from 'react';
import React from 'react';
import { Text, TouchableOpacity, Modal, View, TextInput } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { AntDesign } from '@expo/vector-icons';

const Calendar = ({ parentCallback }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');

  const handleOnPress = () => {
    setOpen(!open);
  };
  const handleChange = propDate => {
    setDate(propDate);
    parentCallback(propDate);
  };

  let brazilianDate = date.split('/').reverse().join('/');

  return (
    <View className="items-center justify-center">
      <View className="flex-row gap-5 justify-end w-full mr-12 items-center">
        <TouchableOpacity onPress={handleOnPress}>
          <Text className="text-center m-5 text-lg font-bold ">Data</Text>
          <TextInput
            editable={false}
            className="w-full bg-gray-600 rounded-md h-10 text-center font-bold text-black"
          >
            {brazilianDate}
          </TextInput>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDate('')}>
          <Text>
            Apagar
            <AntDesign name="delete" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={open}>
        <View className="items-center justify-center mt-5">
          <View className="m-20 bg-white rounded-3xl w-full p-9 items-center shadow-2xl">
            <DatePicker
              mode="calendar"
              selected={date}
              onDateChange={handleChange}
            />
            <TouchableOpacity onPress={handleOnPress}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Calendar;
