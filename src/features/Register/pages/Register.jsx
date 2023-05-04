import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../Layout/Header';
import useFetch from '../../../hooks/useFetch';
import { useState } from 'react';
import { baseUrl } from '../../../enviroments/enviroment';
import BtnNavigation from '../../Home/Navigation/BtnNavigation';

const RegisterScreen = ({ navigation }) => {
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
      <KeyboardAvoidingView
        className="mx-5 items-center"
        behavior="padding"
        keyboardVerticalOffset={40}
      >
        <ScrollView className="w-full">
          <View className="flex-1 mx-5 items-center overflow-hidden">
            <View className="text-center w-full">
              <Text className="text-xl font-bold my-3 text-center">
                Crie sua conta
              </Text>
              <View className="items-center w-full">
                <TextInput
                  className="bg-gray-200 text-xl rounded-md h-14 w-full font-bold my-2 px-2"
                  placeholder="Nome"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  className="bg-gray-200 text-xl rounded-md h-14 w-full font-bold my-2 px-2"
                  placeholder="E-mail"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  className="bg-gray-200 text-xl rounded-md h-14 w-full font-bold my-2 px-2"
                  placeholder="Senha"
                  secureTextEntry
                />
                <TextInput
                  className="bg-gray-200 text-xl rounded-md h-14 w-full font-bold my-2 px-2"
                  placeholder="Confirme sua senha"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
                <BtnNavigation
                  className="text-right"
                  title={'Já tem uma conta?'}
                  route={'Entrar'}
                  navigation={navigation}
                />
              </View>
            </View>
            <View className="w-full">
              <TouchableOpacity
                className="mt-1 py-2 text-center w-full items-center justify-center bg-green-300 h-12 rounded-xl"
                title="Criar conta"
                onPress={handlePress}
              >
                <Text className="text-white font-bold text-xl w-full text-center">
                  Criar conta
                </Text>
              </TouchableOpacity>
              {loading && <Text>Loading...</Text>}
              {error && <Text>Error: {error.message}</Text>}
              {data && navigation.navigate('Entrar')}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegisterScreen;
