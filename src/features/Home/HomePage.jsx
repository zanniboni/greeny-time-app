import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../Layout/Header';
import BtnNavigation from './Navigation/BtnNavigation';
import GraficoDeBarras from '../Chart/Chart';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({ navigation }) => {
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
    <View style={styles.mainView}>
      <Header title={'Greeny Time'} />
      <View>
        <Text>Bem vindo ao Greeny, {name}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Text style={styles.btnTitle}>Salário</Text>
            <BtnNavigation
              style={styles.btnStyle}
              title={'Salário'}
              route={'Registro de salário'}
              navigation={navigation}
            />
          </View>
          <View>
            <Text style={styles.btnTitle}>Horas</Text>
            <BtnNavigation
              style={styles.btnStyle}
              title={'Horas'}
              route={'Registro de horas trabalhadas'}
              navigation={navigation}
            />
          </View>
          <View>
            <Text style={styles.btnTitle}>Gastos</Text>
            <BtnNavigation
              style={styles.btnStyle}
              title={'Gastos'}
              route={'Registro de gastos'}
              navigation={navigation}
            />
          </View>
          <View>
            <Text style={styles.btnTitle}>Receita</Text>
            <BtnNavigation
              style={styles.btnStyle}
              title={'Receita'}
              route={'Registro de receitas'}
              navigation={navigation}
            />
          </View>
          <View>
            <Text style={styles.btnTitle}>Categoria</Text>
            <BtnNavigation
              style={styles.btnStyle}
              title={'Categoria'}
              route={'Categoria'}
              navigation={navigation}
            />
          </View>
        </View>
      </ScrollView>
      <GraficoDeBarras />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 6,
    padding: 20,
    width: '100%',
  },
  btnStyle: {
    width: 100,
    color: '#00b894',
    backgroundColor: '#00b894',
    height: 40,
    borderRadius: 30,
    elevation: 5,
    textAlignVertical: 'center',
  },
  btnTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomePage;
