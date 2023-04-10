import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../Layout/Header';
import Formulary from '../Form/Formulary';
import Calendar from '../Calendar/Calendar';
import SubmitButton from '../SubmitButton/SubmitButton';

const RegisterSalaryScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>
        Salário bruto
      </Text>
      <Formulary style={styles.formContainer}placeholder={'R$ 10.000,00'} />
      <Calendar/>
      <View style={styles.btn}>
      <SubmitButton/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  formContainer: {
    width: '80%'
  },
  btn:{
    width: '100%'
  }
})

export default RegisterSalaryScreen;