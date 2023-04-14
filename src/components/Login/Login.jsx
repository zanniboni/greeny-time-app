import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Header from '../Layout/Header';
import BtnNavigation from '../Home/Navigation/BtnNavigation';
import useFetch from '../../hooks/useFetch';
import isEmail from 'validator/lib/isEmail';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
  const { loading, error, data, fetchData } = useFetch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlePress = () => {
    fetchData({
      url: 'http://10.0.2.2:3333/session',
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
      <View style={styles.container}>
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
          <TouchableOpacity
            style={styles.box}
            title="Login"
            onPress={handlePress}
          >
            <Text style={styles.btnStyle}>Login</Text>
          </TouchableOpacity>
          {loading && <Text>Loading...</Text>}
          {error && <Text>Error: {error.message}</Text>}
          {data && navigation.navigate('Início')}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    overflow: 'hidden',
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
    fontWeight: '400',
    fontSize: 15,
  },
  box: {
    width: '100%',
    borderColor: '#ddd',
    padding: 10,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Login;
