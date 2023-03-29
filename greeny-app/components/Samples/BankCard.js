import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BankCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/favicon.png')}
        style={styles.icon}
      />
      <Text style={styles.bankName}>Saldo em conta:</Text>
      <Text style={styles.accountType}>R$ 200.123.430,23</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  bankName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  accountType: {
    fontSize: 16,
    color: '#555',
  },
});

export default BankCard;
