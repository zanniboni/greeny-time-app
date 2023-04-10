import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const SaveSalaryButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.btnText}>Enviar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00b894',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '50%',
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default SaveSalaryButton;
