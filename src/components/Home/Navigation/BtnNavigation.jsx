import React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

const BtnNavigation = ({ navigation, route, title, style }) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={styles.box}
      onPress={() => navigation.navigate(route)}
    >
      <Text style={style}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: '#ddd',
    padding: 10,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default BtnNavigation;
