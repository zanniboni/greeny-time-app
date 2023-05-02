import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Header from '../Layout/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { baseUrl } from '../../enviroments/enviroment';

const Login = ({ navigation }) => {
  const { loading, error, data, fetchData } = useFetch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const successLogin = token => {
    const saveToken = async () => {
      try {
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('name', data.user.name);
        await AsyncStorage.setItem('email', data.user.email);

        navigation.navigate('Início');
      } catch (e) {
        console.log('Error while saving token in AsyncStorage');
      }
    };

    saveToken();
  };

  const handlePress = () => {
    fetchData({
      url: `${baseUrl}/session`,
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };

  return (
    <>
      <Header title="Greeny Time" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={50}
      >
        <ScrollView style={{ width: '90%' }}>
          <View>
            <View>
              <Text style={styles.title}>
                Bem-vindo(a)! Por favor, faça login para continuar.
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Text style={styles.pass}>Esqueceu sua senha?</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.box} onPress={handlePress}>
              <Text style={styles.btnStyle}>Login</Text>
            </TouchableOpacity>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error: {error.message}</Text>}
            {data && successLogin(data.token)}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#ddd',
    fontSize: 20,
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    paddingHorizontal: 20,
    maxWidth: '95%',
  },
  btnStyle: {
    color: 'white',
    backgroundColor: '#00b894',
    height: 50,
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnContainer: {
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 20,
  },
  pass: {
    textAlign: 'right',
    marginTop: 20,
    marginHorizontal: 20,
    fontWeight: '400',
    fontSize: 15,
  },
  box: {
    marginTop: 5,
    paddingVertical: 10,
    textAlign: 'center',
    width: '100%',
  },
});

export default Login;
