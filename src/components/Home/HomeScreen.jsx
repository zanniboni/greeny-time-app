import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../Layout/Header';
import BtnNavigation from './Navigation/BtnNavigation';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainView}>
      <Header title={'GreenyTime'} />
      <View style={styles.container}>
        <BtnNavigation
          style={styles.btnStyle}
          title={'Registrar Salário'}
          route={'Registro de salário'}
          navigation={navigation}
        />
        <BtnNavigation
          style={styles.btnStyle}
          title={'Registrar horas'}
          route={'Registro de horas trabalhadas'}
          navigation={navigation}
        />
        <BtnNavigation
          style={styles.btnStyle}
          title={'Registrar gastos'}
          route={'Registro de gastos'}
          navigation={navigation}
        />
        <BtnNavigation
          style={styles.btnStyle}
          title={'Registro receita'}
          route={'Registro de receitas'}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 6,
    backgroundColor: '#ddd',
    padding: 20,
    width: 200,
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
});

export default HomeScreen;
