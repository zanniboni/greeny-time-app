import React from 'react';
import { View } from 'react-native';
import Header from '../Layout/Header';
import Formulary from '../Form/Formulary';
import { Calendar } from "../Calendar/Calendar";

const RegisterSalaryScreen = () => {
  return (
    <View>
      <Header title={'Adicionar salário bruto'} />
      <Formulary title={'Salário bruto'} placeholder={'10.000'} />
      <Calendar/>
    </View>
  );
};

export default RegisterSalaryScreen;