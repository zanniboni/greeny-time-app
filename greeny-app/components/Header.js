import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <MaterialIcons name='access-time' size={24} color='#fff' />
      <Text style={styles.headerText}>GreenyTime</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b894',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
    marginLeft: 10,
  },
});

export default Header;
