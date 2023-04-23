import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../Layout/Header';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { baseUrl } from '../../enviroments/enviroment';
import BtnNavigation from '../Home/Navigation/BtnNavigation';

const Register = ({ navigation }) => {
  const { loading, error, data, fetchData } = useFetch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlePress = () => {
    fetchData({
      url: `${baseUrl}/users`,
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  };

  return (
    <>
      <Header title="Greeny Time" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Crie sua conta</Text>
          <View style={styles.content}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirme sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <BtnNavigation
              style={styles.alreadyIn}
              title={'Já tem uma conta?'}
              route={'Entrar'}
              navigation={navigation}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.box}
            title="Criar conta"
            onPress={handlePress}
          >
            <Text style={styles.btnStyle}>Criar conta</Text>
          </TouchableOpacity>
          {loading && <Text>Loading...</Text>}
          {error && <Text>Error: {error.message}</Text>}
          {data && navigation.navigate('Entrar')}
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
    maxWidth: '100%',
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
    textAlign: 'center',
  },
  pass: {
    textAlign: 'right',
    marginTop: 20,
    fontWeight: '400',
    fontSize: 15,
  },
  content: {
    textAlign: 'center',
    width: '100%',
  },
  alreadyIn: {
    textAlign: 'right',
  },
});

export default Register;
