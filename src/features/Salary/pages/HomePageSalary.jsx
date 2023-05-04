import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
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
    <View style={styles.container}>
      <Header />
      <Text>Salário bruto</Text>
      <View style={[styles.container]}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'R$ 10.000,00'}
              onChangeText={setSalary}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <Calendar parentCallback={getDateFromCalendar} />
      <View style={styles.btn}>
        <TouchableOpacity style={styles.button} onPress={sendDataToBackend}>
          <Text style={styles.btnText}>Enviar</Text>
          {loading && <Text>Loading...</Text>}
          {error && <Text>Error: {error.message}</Text>}
          {data && []}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#00b894',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  errorText: {
    color: 'red',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  formContainer: {
    width: '80%',
  },
  btn: {
    width: '100%',
  },
});

export default HomePageSalary;
