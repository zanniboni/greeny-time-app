import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SaveSalaryButton from './SaveSalaryButton';

const AddSalaryForm = () => {
  const [salario, setSalario] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Salário bruto"
        value={salario}
        onChangeText={setSalario}
      />
      <SaveSalaryButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 3,
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default AddSalaryForm;