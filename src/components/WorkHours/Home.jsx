import React from 'react';
import { DateReadOnlyInput } from '../DateInput/DateReadOnlyInput';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../Layout/Header';
import Formulary from '../Form/Formulary';
import SubmitButton from '../SubmitButton/SubmitButton';

const WorkHoursScreen = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Horas trabalhadas</Text>
          <Formulary
            style={styles.formContainer}
            placeholder={'Digite o número de horas'}
          />
          <View style={styles.btn}>
            <SubmitButton />
          </View>
        </View>
        <View>
          <DateReadOnlyInput />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  btn: {
    width: '100%',
  },
});
export default WorkHoursScreen;
