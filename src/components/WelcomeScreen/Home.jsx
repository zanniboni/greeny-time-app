import React from 'react';
import { View, Text } from 'react-native';
import BtnNavigation from '../Home/Navigation/BtnNavigation';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-evenly items-center bg-white">
      <Text className="text-green-300 font-bold text-center leading-10 mt-24 text-5xl">
        Aumente seu poder financeiro com Greeny Time
      </Text>
      <Text className="text-2xl text-center font-bold">
        Gerencie suas finanças com sabedoria e alcance seus objetivos
        financeiros
      </Text>
      <View className="flex-row justify-evenly items-center w-full">
        <BtnNavigation
          title={'Entrar'}
          route={'Entrar'}
          navigation={navigation}
        />
        <BtnNavigation
          title={'Cadastrar'}
          route={'Registrar'}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
