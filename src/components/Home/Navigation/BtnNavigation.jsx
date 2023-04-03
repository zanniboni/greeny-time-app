import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const BtnNavigation = ({ navigation, route, title }) => {
  return (
    <View style={styles.container}>
      <Button
        title={title}
        onPress={() => navigation.navigate(route)}
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


export default BtnNavigation;
