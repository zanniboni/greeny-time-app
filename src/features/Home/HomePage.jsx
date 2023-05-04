import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from '../Layout/Header';
import BtnNavigation from './Navigation/BtnNavigation';
import GraficoDeBarras from '../Chart/Chart';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const getName = async () => {
      try {
        const savedName = await AsyncStorage.getItem('name');
        setName(savedName);
      } catch (e) {
        console.log('Error getting name from AsyncStorage:', e);
        setName('Error');
      }
    };

    getName();
  }, []);

  return (
    <>
      <Header title={'Greeny Time'} />
      <View className="flex-1 items-cente">
        <View className="justify-center items-center">
          <Text>Bem vindo ao Greeny, {name}</Text>
        </View>
        <ScrollView
          className=" max-h-24 mb-5"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row items-center justify-evenly w-full mt-5 px-2 gap-x-5">
            <View>
              <BtnNavigation
                className="w-full"
                title={'Salário'}
                route={'Registro de salário'}
                navigation={navigation}
              />
            </View>
            <View>
              <BtnNavigation
                className="w-full"
                title={'Horas'}
                route={'Registro de horas trabalhadas'}
                navigation={navigation}
              />
            </View>
            <View>
              <BtnNavigation
                className="w-full"
                title={'Gastos'}
                route={'Registro de gastos'}
                navigation={navigation}
              />
            </View>
            <View>
              <BtnNavigation
                className="w-full"
                title={'Receita'}
                route={'Registro de receitas'}
                navigation={navigation}
              />
            </View>
            <View>
              <BtnNavigation
                className="w-full"
                title={'Categoria'}
                route={'Categoria'}
                navigation={navigation}
              />
            </View>
          </View>
        </ScrollView>
        <View className="justify-center items-center">
          <GraficoDeBarras />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
