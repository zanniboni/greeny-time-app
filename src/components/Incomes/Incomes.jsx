import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Header from '../Layout/Header';
import Formulary from '../Form/Formulary';
import Calendar from '../Calendar/Calendar';
import ComboBox from '../Combobox/Combobox';
import SubmitButton from '../SubmitButton/SubmitButton';

const IncomesScreen = () => {
  return (
    <>
      <Header />
      <View className="justify-between">
        <Text className="text-2xl text-center my-2 font-semibold">
          Adicione a receita
        </Text>
        <TextInput
          placeholder="Pagamento"
          className="my-2 bg-gray-200 rounded-md p-2 font-bold text-xl"
        />
        <View className="justify-between flex-row mx-5 mt-5">
          <Text className="text-xl font-semibold">Categoria</Text>
          <Text className="text-xl font-semibold">Valor</Text>
        </View>
        <View className="justify-between flex-row mx-2 mt-5">
          <ComboBox />
          <Formulary className="w-2/5" placeholder={'R$ 10.000,00'} />
        </View>
        <Calendar />
        <View className="w-full">
          <SubmitButton />
        </View>
      </View>
    </>
  );
};

export default IncomesScreen;
