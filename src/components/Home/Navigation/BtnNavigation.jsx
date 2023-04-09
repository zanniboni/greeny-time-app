import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const BtnNavigation = ({ navigation, route, title, style}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(route)}> 
        <Text style={style}>
          {title}
        </Text>
      </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  box: {
    width: '100%',
    borderColor: '#ddd',
    padding: 10,
    marginTop: 5,
    textAlign: 'center',
  },
});


export default BtnNavigation;
