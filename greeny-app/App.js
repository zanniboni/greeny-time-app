import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import BankCard from './components/BankCard';
import Formulario from './components/Formulario';
import BarChartComponent from './components/BarChart';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <BankCard />
      <BarChartComponent />
      <Formulario />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;