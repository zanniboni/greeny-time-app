import React from 'react';
import {
  View,
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
        className="mx-5 items-center"
        behavior="padding"
        keyboardVerticalOffset={40}
      >
        <ScrollView className="w-11/12">
          <View>
            <View>
              <Text className="text-3xl font-normal tracking-widest mt-5">
                Bem-vindo(a)! Por favor, faça login para continuar.
              </Text>
            </View>
            <View>
              <TextInput
                className="bg-gray-200 text-2xl rounded-md h-14 w-full font-normal my-5 px-2"
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                className="bg-gray-200 text-2xl rounded-md h-14 w-12/12 font-normal px-2"
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Text className="text-right mt-5 mx-5 font-medium text-lg">
                Esqueceu sua senha?
              </Text>
            </View>
          </View>
          <View className="w-full">
            <TouchableOpacity
              className="mt-1 py-2 text-center w-full items-center justify-center bg-green-300 h-12 rounded-xl"
              onPress={handlePress}
            >
              <Text className="text-white font-normal text-xl w-full text-center">
                Login
              </Text>
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

export default Login;
