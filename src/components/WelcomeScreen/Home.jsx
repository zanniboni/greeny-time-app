import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import BtnNavigation from '../Home/Navigation/BtnNavigation';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Aumente seu poder financeiro com Greeny Time
      </Text>
      <Text style={styles.subtitle}>
        Gerencie suas finanças com sabedoria e alcance seus objetivos
        financeiros
      </Text>
      <View style={styles.btnContainer}>
        <BtnNavigation
          style={styles.btnSignIn}
          title={'Entrar'}
          route={'Entrar'}
          navigation={navigation}
        />
        <BtnNavigation
          style={styles.btnSignUp}
          title={'Cadastrar'}
          route={'Registrar'}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    color: '#00b894',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#777',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1,
    lineHeight: 50,
    marginTop: 100,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  btnSignIn: {
    color: 'white',
    backgroundColor: '#00b894',
    height: 50,
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnSignUp: {
    color: '#00b894',
    backgroundColor: 'transparent',
    height: 50,
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#00b894',
  },
});

export default WelcomeScreen;
