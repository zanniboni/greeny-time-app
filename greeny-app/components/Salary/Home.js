import React from 'react';
import { View } from 'react-native';
import Header from '../Layout/Header';
import AddSalaryForm from './AddSalary/AddSalaryForm';

const RegisterSalaryScreen = () => {
  return (
    <View>
      <Header title={"Adicionar salário bruto"} />
      <AddSalaryForm />
    </View>
  );
};

export default RegisterSalaryScreen;