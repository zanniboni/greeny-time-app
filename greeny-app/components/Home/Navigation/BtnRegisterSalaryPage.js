import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const BtnRegisterSalaryPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Registrar salário"
        onPress={() => navigation.navigate('RegisterSalary')}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 6,
  }
});


export default BtnRegisterSalaryPage;
