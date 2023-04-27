import React from 'react';
import { DateReadOnlyInput } from '../DateInput/DateReadOnlyInput';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../Layout/Header';

const WorkHoursScreen = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View>
          <Text style={styles.textAlign}>Horas trabalhadas</Text>
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
  formContainer: {
    width: '80%',
  },
  btn: {
    width: '100%',
  },
  textAlign: {
    textAlign: 'center',
  },
});
export default WorkHoursScreen;
