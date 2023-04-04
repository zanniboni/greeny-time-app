import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const BtnNavigation = ({ navigation, route, title }) => {
  return (
    <View style={styles.box}>
      <Button
        title={title}
        onPress={() => navigation.navigate(route)}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  box: {
    width: 150,
    borderColor: '#ddd',
    padding: 10,
    marginTop: 5
  }
});


export default BtnNavigation;
